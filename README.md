# Broccoli Image Resize

A plugin to resize images as part of a Broccoli build. This plugin
uses [sharp](http://sharp.dimens.io/en/stable/) to do the image resizing.

## Usage

The following example (when run on an input of `test.png`) will produce
`test.png` at a width of 640 with auto height, and a `test-th.png` at exactly
100 width and 100 height (cropped).

```js
var BroccoliImageResize = require('broccoli-image-resize');

var outputNode = new BroccoliImageResize(inputNodes, {
  sizes: {
    default: [640],
    th: [100, 100]
  }
});
```

## Options

| Option | Description |
| -- | -- |
| sizes | The arguments to [sharp's resize](http://sharp.dimens.io/en/stable/api-resize/#resize) function as an array |
| annotation | An annotation for the Broccoli plugin output |
