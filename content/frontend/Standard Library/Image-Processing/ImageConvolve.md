---
title: ImageConvolve
---

`ImageConvolve[image, ker]` gives the convolution of image with kernel ker.

## Examples

Apply a blur kernel:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageConvolve[img, BoxMatrix[2]/25]
```

Sharpen with Laplacian:

```wolfram
ImageConvolve[img, {{0, -1, 0}, {-1, 5, -1}, {0, -1, 0}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageConvolve.html) for more details.*