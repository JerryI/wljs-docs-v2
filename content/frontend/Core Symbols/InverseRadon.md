# InverseRadon

`InverseRadon[image]` gives the inverse discrete Radon transform of *image*.

- `InverseRadon[image, {w, h}]` specifies the width *w* and the height *h* of the resulting image.

## Examples

```wolfram
sinogram = Radon[DiskMatrix[10]];
InverseRadon[sinogram]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseRadon.html) for more details.*