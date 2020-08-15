A simple, easy to use promise-based module for interacting with some Agma.io APIs.

# Setup and Installation

```
$ npm i agma-io.js
```

# Examples

```js
// Require the NPM Module
const AgmaioJS = require('agma-io.js');

// Create a new instance
const Agma = new AgmaioJS();

// Get all server stats
Agma.getServers().then(data => {
  // ...
})

// Get all server stats by region
// Possible regions: eu, na, as
Agma.getServers('eu').then(data => {
  // ...
})

// Get all top 20 mass stats
Agma.getMass().then(data => {
  // ...
})

// Get top 20 mass stats by serverId
Agma.getMass(10).then(data => {
  // ...
})

// Get top 800 levels
Agma.getLevels().then(data => {
  // ...
})

// Pagination for top 800 levels
Agma.getLevels({
  pagination: true,   // Turn pagination on/off
  page: 0,            // Initial page
  itemsPerPage: 20    // Amount of users per page
}).then(data => {
  // The data object has built in functions

  // Next page
  data.nextPage();

  // Previous page
  data.prevPage();

  // Set page
  data.setPage(page);

  // To access the users array
  data.users;
})

// Get a user
Agma.getUser('Nuke').then(data => {
  // ...
})
```