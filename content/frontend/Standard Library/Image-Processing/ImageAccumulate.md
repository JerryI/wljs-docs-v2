---
title: ImageAccumulate
---

`ImageAccumulate[image]` gives an image in which each pixel represents a sum of all pixels below and to the left of that pixel in image.

This creates an integral image (summed-area table), useful for fast box filtering operations.

## Examples

```wolfram
ImageAccumulate[ExampleData[{"TestImage", "Lena"}]]
```

```wolfram
img = RandomImage[1, {100, 100}];
ImageAccumulate[img]
```

```wolfram
ImageAccumulate[ColorConvert[image, "Grayscale"]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageAccumulate.html) for more details.*