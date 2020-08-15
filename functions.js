const axios = require("axios")
const { arrayChunks } = require('./helpers')

// Get data of user by username
exports.getUser = (username) => {
  return new Promise(async (resolve, reject) => {
    axios.get('https://agma.io/royale_stats.php', {
      params: {
        user: username
      }
    }).then(({ data } = res) => {
      if (data == 'noUser') throw new Error(`${username} is not a valid username, or they haven't played Battle Royale yet.`);

      data = JSON.parse(data);
      data.username = username;

      resolve(data)
    }).catch(err => reject(err))
  })
}

// Get all servers, or by region
exports.getServers = (region = '') => {
  return new Promise(async (resolve, reject) => {
    axios.get('https://agma.io/php_hscores_file.php', {
      params: {
        type: 3
      }
    }).then(({ data } = res) => {
      const regions = ['eu', 'na', 'as'];

      if (!region.length) resolve(data.map(server => {
        return {
          id: parseInt(server.serverId),
          name: server.serverName,
          location: regions[parseInt(server.serverLocation)],
          online: Boolean(Number(server.active))
        }
      }));

      data = data.filter(server => regions[parseInt(server.serverLocation)] == region ? server : null)
      data = data.map(server => {
        return {
          id: parseInt(server.serverId),
          name: server.serverName,
          online: Boolean(Number(server.active))
        }
      })

      resolve(data)
    }).catch(err => reject(err))
  })
}

// Get all levels
exports.getLevels = (options = {
  pagination: false,
  page: 0,
  itemsPerPage: 20
}) => {
  return new Promise(async (resolve, reject) => {
    let users = [];

    await axios.all([
      axios.get('https://agma.io/php_hscores_file.php?type=0&page=1'),
      axios.get('https://agma.io/php_hscores_file.php?type=0&page=6'),
      axios.get('https://agma.io/php_hscores_file.php?type=0&page=21')
    ]).then(axios.spread((...responses) => {
      users = users.concat(responses[0].data, responses[1].data, responses[2].data)

      // If pagination is turned off,
      // resolve the promise with current data.
      if (!options.pagination) resolve(users);

      // Else continue with the following code...
      let chunkedUsers = arrayChunks(users, options.itemsPerPage);

      // Resolve promise with object.
      resolve({
        page: options.page,                     // Current page
        users: chunkedUsers[options.page],       // Current users
        nextPage() {                            // Go to next page
          this.page++;
          this.data = chunkedUsers[this.page]
        },
        prevPage() {                            // Go to prev page
          this.page--;
          this.data = chunkedUsers[this.page]
        },
        setPage(page) {                         // Set page
          this.page = page;
          this.data = chunkedUsers[this.page]
        }
      })
    })).catch(err => reject(err))
  })
}