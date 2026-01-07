---
title: ImageForwardTransformation
---

`ImageForwardTransformation[image, f]` gives an image where each pixel at position f[{x, y}] corresponds to position {x, y} in the input image.

`ImageForwardTransformation[image, f, size]` gives an image of the specified size.

## Examples

Apply a swirl transformation:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageForwardTransformation[img, {#[[1]] + 0.1 #[[2]], #[[2]]} &]
```

Polar transformation:

```wolfram
ImageForwardTransformation[img, {Norm[#], ArcTan @@ #} &, {256, 256}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageForwardTransformation.html) for more details.*