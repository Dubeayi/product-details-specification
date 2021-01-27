const express = require('express');

const router = express.Router();

const controller = require('./controller.js');

router.route('/api/bechampions/socialmedia/id')
  .get(controller.findSocialMedia);

router.route('/api/bechampions/productspecdetail/id')
  .get(controller.findDetailSpec);

module.exports = router;
