const db = require('./index.js');

const modelSocialMedia = {
  find: () => db.ChampionsSocialMedia.find(),
  create: (presence) => db.ChampionsSocialMedia.create(presence),
};

module.exports = modelSocialMedia;
