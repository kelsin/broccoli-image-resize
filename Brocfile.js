var ImageResize = require('./index.js');

var output = new ImageResize(['images'], {
  sizes: {
    default: [2048],
    th: [150, 150]
  },
  withoutEnlargement: true
});

module.exports = output;
