# Dithering

`Dithering` is an option for ColorQuantize that specifies whether or not to apply dithering while quantizing the pixel values.

## Examples

Quantize with dithering enabled:

```wolfram
ColorQuantize[image, 8, Dithering -> True]
```

Quantize without dithering:

```wolfram
ColorQuantize[image, 8, Dithering -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Dithering.html) for more details.*