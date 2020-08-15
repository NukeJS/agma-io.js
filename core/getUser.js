const axios = require("axios")

/**
 * getUser
 * @param {String} username 
 * @throws {Error} throw an error if user doesn't exist
 * @returns {Object}
 */
module.exports = (username) => {
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