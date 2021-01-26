const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/Champions';
mongoose.Promise = global.Promise;

mongoose.connect(mongoURI);

const championsSocialMediaSchema = mongoose.Schema({
  InstagramImage: { type: String },
  UserInstagram: { type: String },
  Likes: { type: Number },
  GetThisLook: [{ type: String }],
});

const championsDetailSpecSchema = mongoose.Schema({
  ProductDetail: {
    Title: { type: String },
    Body: { type: String },
  },
  ProductSpecification: [{ type: String }],
});

const ChampionsSocialMedia = mongoose.model('ChampionsSocialMedia', championsSocialMediaSchema);

const ChampionsDetailSpec = mongoose.model('ChampionsDetailSpec', championsDetailSpecSchema);

module.exports = {
  ChampionsSocialMedia,
  ChampionsDetailSpec,
};
