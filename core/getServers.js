const axios = require("axios")

/**
 * getServers
 * @param {String} region
 * @returns {Array}
 */
module.exports = (region = '') => {
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