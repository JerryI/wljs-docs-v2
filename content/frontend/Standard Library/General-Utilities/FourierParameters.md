# FourierParameters

`FourierParameters` is an option to Fourier and related functions that specifies the conventions to use in computing Fourier transforms.

## Examples

Use physics convention for Fourier transform:

```wolfram
Fourier[{1, 2, 3, 4}, FourierParameters -> {1, -1}]
```

Use signal processing convention:

```wolfram
Fourier[{1, 2, 3, 4}, FourierParameters -> {0, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierParameters.html) for more details.*