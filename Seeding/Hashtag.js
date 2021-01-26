const modelSocialMedia = require('../DB/modelSocialMedia.js');

const randomizer = (array) => {
  const output = Math.floor(Math.random() * Math.floor(array.length));
  return output;
};

const adjectives = ['Lil', 'XoXo', '4realz4', 'Major', 'Boy', 'FizzyMc', 'Dudebro', 'Cutie', 'RoiderMc', 'MC'];

const noun = ['John', 'Jack', 'Jerry', 'Boy', 'Man', 'Jill', 'Jenny', 'Jocelyn', 'Girl', 'Lady'];

const suffix = ['sr', 'jr', '2021', '9999', '96', 'theBOSS', '714', '666', 'l33t', '405'];

const imageurl = ['https://images.unsplash.com/photo-1542327821-87a5f0fb3c9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1514415959856-84514e035ce5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1515040449584-3c3701042393?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1520269769501-f120ef8432d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2208&q=80', 'https://images.unsplash.com/photo-1570392896435-66d1abcce20d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80', 'https://images.unsplash.com/flagged/photo-1578524778753-9d9329e587c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1581870789816-1a7d5ea78d61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1581872715407-5551d5d3fcfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1548&q=80', 'https://images.unsplash.com/photo-1505964135045-cdada2f6bf43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80', 'https://images.unsplash.com/photo-1567535969277-4e19106721e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/flagged/photo-1578524779087-4007adc32183?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1528567339718-6ee254d88c4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1525792581144-b14380afbd3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2849&q=80', 'https://images.unsplash.com/photo-1601879305068-751abb5821e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1601&q=80', 'https://images.unsplash.com/photo-1519638051208-f73939d9a63f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3578&q=80', 'https://images.unsplash.com/photo-1567783045133-cb5296fe97cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1589819223570-41f3734945b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1569&q=80', 'https://images.unsplash.com/photo-1571216690333-2efa110cc981?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1521183142708-ee6392033c3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1270&q=80', 'https://images.unsplash.com/photo-1567535969613-400bc643ce69?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1577593934802-1ffc12d40363?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1606051600088-2c9bf130ab3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1558&q=80', 'https://images.unsplash.com/photo-1606051600761-3753de5474e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1558&q=80', 'https://images.unsplash.com/photo-1610318781909-139490d3f409?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1561566424-47f3f6f5fdef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1531311243148-d2653fa84700?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1268&q=80', 'https://images.unsplash.com/photo-1596217212570-776beb6224d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80'];

const instagramHandle = () => {
  const handle = `${adjectives[randomizer(adjectives)]}${noun[randomizer(noun)]}${suffix[randomizer(suffix)]}`;
  return handle;
};

const likes = () => Math.floor(Math.random() * Math.floor(1000));

const arrayOfPhotos = () => {
  const result = [];
  for (let i = 0; i < Math.ceil(Math.random() * 3); i += 1) {
    result.push(imageurl[randomizer(imageurl)]);
  }
  return result;
};

const socialMediaConstructor = () => {
  const result = [];
  for (let i = 0; i < 100; i += 1) {
    const object = {};
    object.InstagramImage = imageurl[randomizer(imageurl)];
    object.UserInstagram = instagramHandle();
    object.Likes = likes();
    object.GetThisLook = arrayOfPhotos();
    result.push(object);
  }
  return result;
};

modelSocialMedia.create(socialMediaConstructor());
