var ImageResize = require('./index.js');

var output = new ImageResize(['images'], {
  sizes: {
    default: [100,100],
    th: [50,50]
  }
});

module.exports = output;
