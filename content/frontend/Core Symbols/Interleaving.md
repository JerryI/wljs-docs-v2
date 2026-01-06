# Interleaving

`Interleaving` is an option for `Image` and related functions that specifies whether data corresponding to different channels in an object such as an image should be interleaved.

## Examples

With interleaving:

```wolfram
Image[data, Interleaving -> True]
```

Without interleaving:

```wolfram
Image[data, Interleaving -> False]
```

Check current setting:

```wolfram
Options[Image, Interleaving]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Interleaving.html) for more details.*