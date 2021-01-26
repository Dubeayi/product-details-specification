const modelDetailSpec = require('../DB/modelDetailSpec.js');

const modelSocialMedia = require('../DB/modelSocialMedia.js');

const Controller = {
  findDetailSpec: (req, res) => {
    modelDetailSpec.find()
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send(err));
  },

  findSocialMedia: (req, res) => {
    modelSocialMedia.find()
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(400).send(err));
  },
};

module.exports = Controller;
