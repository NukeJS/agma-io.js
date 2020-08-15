const axios = require('axios');
const getServers = require('./getServers');

module.exports = (serverId) => {
  return new Promise(async (resolve, reject) => {
    if (serverId) {
      await axios.get('https://agma.io/php_hscores_file.php', {
        params: {
          type: 1,
          page: serverId
        }
      }).then(({ data } = res) => {
        data = data.map(user => {
          return {
            username: user.username,
            goldMember: parseInt(user.memberType) > 0,
            moderator: parseInt(user.moderatorType) == 1,
            admin: parseInt(user.moderatorType) == 2,
            donator: user.dntn,
            date: user.date,
            score: user.score,
            serverName: user.serverName
          }
        })

        resolve(data)
      }).catch(err => reject(err))
    } else {
      // If you don't pass in a serverId,
      // it will fetch all mass scores.
      getServers().then(data => {
        data.forEach(async (server) => {
          await axios.get('https://agma.io/php_hscores_file.php', {
            params: {
              type: 1,
              page: server.id
            }
          }).then(({ data } = res) => {
            data = data.map(user => {
              return {
                username: user.username,
                goldMember: parseInt(user.memberType) > 0,
                moderator: parseInt(user.moderatorType) == 1,
                admin: parseInt(user.moderatorType) == 2,
                donator: user.dntn,
                date: user.date,
                score: user.score,
                serverName: user.serverName
              }
            })

            resolve(data)
          })
        })
      }).catch(err => reject(err))
    }
  })
}