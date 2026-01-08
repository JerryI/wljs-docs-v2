---
title: BilateralFilter
---

`BilateralFilter[data, σ, μ]` applies a bilateral filter of spatial spread σ and pixel value spread μ to data.

## Examples

Apply bilateral filter to an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
BilateralFilter[img, 2, 0.1]
```

Noise reduction while preserving edges:

```wolfram
noisy = ImageAdd[img, RandomImage[{-0.2, 0.2}]];
BilateralFilter[noisy, 3, 0.15]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BilateralFilter.html) for more details.