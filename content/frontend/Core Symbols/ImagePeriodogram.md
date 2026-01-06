# ImagePeriodogram

`ImagePeriodogram[image]` shows the squared magnitude of the discrete Fourier transform (power spectrum) of image.

`ImagePeriodogram[image, n]` averages power spectra of n×n partitions.

## Examples

Display power spectrum:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImagePeriodogram[img]
```

With partition size:

```wolfram
ImagePeriodogram[img, 64]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImagePeriodogram.html) for more details.*