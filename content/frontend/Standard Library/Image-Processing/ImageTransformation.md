---
title: ImageTransformation
---

`ImageTransformation[image, f]` gives an image where each pixel at position p corresponds to position f[p] in image.

`ImageTransformation[image, f, size]` gives an image of the specified size.

## Examples

Fisheye effect:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageTransformation[img, # (1 + 0.5 Norm[#]^2) &, DataRange -> Full]
```

Wave distortion:

```wolfram
ImageTransformation[img, {#[[1]], #[[2]] + 10 Sin[#[[1]]/20]} &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageTransformation.html) for more details.*