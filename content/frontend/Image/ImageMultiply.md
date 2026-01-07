---
title: ImageMultiply
---

`ImageMultiply[image, x]` multiplies each channel value in image by a factor x.

`ImageMultiply[image1, image2]` gives an image where each pixel is the product of corresponding pixels.

## Examples

Darken an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageMultiply[img, 0.5]
```

Multiply two images:

```wolfram
mask = DiskMatrix[100];
ImageMultiply[img, Image[mask]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageMultiply.html) for more details.*