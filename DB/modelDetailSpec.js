const db = require('./index.js');

const modelDetailSpec = {
  find: () => db.ChampionsDetailSpec.find(),
  create: (information) => db.ChampionsDetailSpec.create(information),
};

module.exports = modelDetailSpec;
