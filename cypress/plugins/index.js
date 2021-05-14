const sqlServer = require('cypress-sql-server');

const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  addMatchImageSnapshotPlugin(on, config);
}


