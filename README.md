# agma-io.js

A simple, easy to use promise-based module for interacting with some Agma.io APIs.

# Installing

Using NPM:

```
$ npm i agma-io.js
```

Using Yarn:

```
$ yarn add agma-io.js
```

# Example

Get all servers

```js
const { getServers } = require("agma-io.js");

(async () => {
  const servers = await getServers();
})();
```

Get all servers by given region

```js
const { getServers } = require("agma-io.js");

(async () => {
  const euServers = await getServers("EU");
})();
```

Get the mass leaderboard of a server by server id

```js
const { getMassLeaderboard } = require("agma-io.js");

(async () => {
  const selffeedEuMassLeaderboard = await getMassLeaderboard(29);
})();
```

Get the global levels leaderboard

```js
const { getLevelsLeaderboard } = require("agma-io.js");

(async () => {
  const levelsLeaderboard = await getLevelsLeaderboard();
})();
```

Get a user by username

> **NOTE**: This uses the Battle Royale API. This means that if the given user hasn't played Battle Royale yet, it will return an error.

```js
const { getBattleRoyaleUser } = require("agma-io.js");

(async () => {
  const user = await getBattleRoyaleUser("Nuke");
})();
```

Of course you can use `.then()` and things like that.
```js
const { getBattleRoyaleUser } = require("agma-io.js");

getBattleRoyaleUser('Nuke')
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  })
```