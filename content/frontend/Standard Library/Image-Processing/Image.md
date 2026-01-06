---
title: Image
---

`Image[data]` represents a raster image with pixel values given by the array data.

`Image[graphics]` creates a raster image from a graphics object.

`Image[obj,options]` gives an image that uses the specified options.

## Examples

Create an image from an array:

```wolfram
Image[RandomReal[1, {100, 100}]]
```

Convert graphics to image:

```wolfram
Image[Graphics[Circle[]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Image.html) for more details.*