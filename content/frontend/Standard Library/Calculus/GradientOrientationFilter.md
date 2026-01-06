---
title: GradientOrientationFilter
---

`GradientOrientationFilter[data, r]` gives the local orientation parallel to the gradient of `data`, computed using discrete derivatives of a Gaussian of pixel radius `r`, returning values between -π/2 and π/2.

- `GradientOrientationFilter[data, {r, σ}]` uses a Gaussian with standard deviation `σ`.

## Examples

```wolfram
GradientOrientationFilter[ExampleData[{"TestImage", "Lena"}], 2]
```

```wolfram
GradientOrientationFilter[image, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GradientOrientationFilter.html) for more details.*