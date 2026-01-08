---
title: ImageClip
---

`ImageClip[image]` clips all channel values in image to lie in the default range.

`ImageClip[image,{min,max}]` clips channel values to lie in the range from min to max.

`ImageClip[image,{min,max},{vmin,vmax}]` gives vmin for values below min and vmax for values above max.

## Examples

Clip an image to a specific range:

```wolfram
ImageClip[img, {0.2, 0.8}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageClip.html) for more details.