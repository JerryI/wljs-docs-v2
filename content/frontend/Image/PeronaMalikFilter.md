---
title: PeronaMalikFilter
---

`PeronaMalikFilter[image]` applies a Perona–Malik diffusion filter to image.

`PeronaMalikFilter[image,t]` specifies the amount of diffusion time t to be applied.

`PeronaMalikFilter[image,t,k]` uses a conductance parameter k.

`PeronaMalikFilter[image,t,k,σ]` applies a Gaussian regularization of width σ to the image gradient in the conductance function.

## Examples

Apply the Perona-Malik filter to an image:

```wolfram
PeronaMalikFilter[img]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PeronaMalikFilter.html) for more details.*