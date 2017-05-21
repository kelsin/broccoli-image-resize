var Plugin = require('broccoli-plugin');
var Promise = require('bluebird');
var glob = require('glob');
var path = require('path');
var sharp = require('sharp');

module.exports = ImageResize;
ImageResize.prototype = Object.create(Plugin.prototype);
ImageResize.prototype.constructor = ImageResize;
function ImageResize(inputNodes, options) {
  options = options || {};
  if (!(this instanceof ImageResize)) {
    return new ImageResize(inputNodes, options);
  }

  Plugin.call(this, inputNodes, {
    annotation: options.annotation
  });

  this.options = options;
}

ImageResize.prototype.build = function() {
  var options = this.options;
  var outputPath = this.outputPath;
  return Promise.map(this.inputPaths, function(dir) {
    return Promise.map(glob.sync('**/*.@(gif|jpe?g|png)', {cwd: dir}), function(inputPath) {
      inputPath = path.join(dir, inputPath);
      var ext = path.extname(inputPath);
      var basename = path.basename(inputPath, ext);

      return Promise.map(Object.keys(options.sizes), function(name) {
        var filename;
        if(name === 'default') {
          filename = basename + ext;
        } else {
          filename = basename + '-' + name + ext;
        }
        var size = options.sizes[name];

        var image = sharp(inputPath);
        return image.metadata()
          .then(function(metadata) {
            return image.resize.apply(image, size)
              .toFile(path.join(outputPath, filename));
          });
      });
    });
  });
};
