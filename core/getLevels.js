const axios = require("axios")
const { arrayChunks } = require('./helpers')

/**
 * getLevels
 * @param {Object} options 
 * @returns {Array}
 */
module.exports = (options = {
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