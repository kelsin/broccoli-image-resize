# Broccoli Image Resize

A plugin to resize images as part of a Broccoli build

## Usage

```js
var BroccoliImageResize = require('broccoli-image-resize');

var outputNode = new BroccoliImageResize(inputNodes, options);
```

## Options

| Option | Description |
| -- | -- |
| sizes | The arguments to [sharp](https://github.com/lovell/sharp)'s resize function as an array |
| annotation | An annotation for the Broccoli plugin output |
