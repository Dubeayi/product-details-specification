const modelDetailSpec = require('../DB/modelDetailSpec.js');
const mongoose = require('mongoose')

const randomizer = (array) => {
  const output = Math.floor(Math.random() * Math.floor(array.length));
  return output;
};

const begining = ['Unisex fit ', 'Amazing fit ', 'Lightweight feel ', 'Heavyweight comfort ', 'Athletic fit ', 'Slim fit ', 'Vintage look ', 'Classic look ', 'Univeresal look'];

const middle = ['that runs slim through the shoulder', 'made from 100% cotton', 'that are reinforced with taping at the seams'];

const end = [' and goes well with leggins and tights.', ' but still gives off a relaxed vibe.', ' and it works in all wardrobes.', ' while keeping you looking fresh', ' while using voodoo magic to avoid shrinkage', ', giving you that formal yet casual look you need for your a workplace, work from home setting.'];

const embroidered = ['embroidered C on the right chest', 'embroidered C on the left chest'];

const COI = ['country of origin: imported'];

const fabric = ['cotton', 'polyester', 'silk', 'chifon', 'linen', 'wool', 'velvet', 'cashmere'];

const fabricComments = [`Fabric: Body: 99%${fabric[randomizer(fabric)]}`, `Fabric: Body: 80%${fabric[randomizer(fabric)]}; oxford: 95%${fabric[randomizer(fabric)]}`, `Fabric: Body: 99%${fabric[randomizer(fabric)]}`];

const titles = ['Empowering those in Power', 'Survival for the Fittest', 'Hood fit for Hood Guys', 'Comfort and Style for the WOH Look', 'Look Good for Nobody', 'Party It Up with This Viral Sweater'];

const productDetailConstructor = () => {
  const result = [];
  for (let i = 0; i < 100; i += 1) {
    const object = {};
    object.ProductDetail = {};
    object.ProductDetail.Title = titles[randomizer(titles)];
    object.ProductDetail.Body = begining[randomizer(begining)] + middle[randomizer(middle)] + end[randomizer(end)] + begining[randomizer(begining)] + middle[randomizer(middle)] + end[randomizer(end)];
    object.ProductSpecification = [];
    object.ProductSpecification.push(begining[randomizer(begining)] + middle[randomizer(middle)]);
    object.ProductSpecification.push(begining[randomizer(begining)] + middle[randomizer(middle)]);
    object.ProductSpecification.push(begining[randomizer(begining)] + middle[randomizer(middle)]);
    object.ProductSpecification.push(begining[randomizer(begining)] + middle[randomizer(middle)]);
    object.ProductSpecification.push(embroidered[randomizer(embroidered)]);
    object.ProductSpecification.push(COI[0]);
    object.ProductSpecification.push(fabricComments[randomizer(fabricComments)]);
    result.push(object);
  }
  return result;
};

modelDetailSpec.create(productDetailConstructor())
  .then(response => {
    mongoose.disconnect()
  })
