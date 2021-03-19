A simple, easy to use promise-based module for interacting with some Agma.io APIs.

# Setup and Installation

```
$ npm i agma-io.js
```

# Examples

```js
// Destructure the functions you'd wish to use, or make it a variable
const { 
  getServers,
  getMassLeaderboard,
  getLevelsLeaderboard,
  getBattleRoyaleUser
} = require('agma-io.js');

(async () => {

  // Fetch servers
  const servers = await getServers();

  // Fetch servers by region
  const euServers = await getServers('EU');

  // Fetch mass leaderboard by server id
  const selffeedEuMassLeaderboard = await getMassLeaderboard(29);

  // Fetch levels leaderboard
  const levelsLeaderboard = await getLevelsLeaderboard();

  // Fetch a user (Uses Battle Royale API)
  const user = await getBattleRoyaleUser('Nuke');
})()
```