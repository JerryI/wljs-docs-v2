# ClippingStyle

`ClippingStyle` is an option for plotting functions that specifies the style of what should be drawn when curves or surfaces would extend beyond the plot range.

## Examples

Style clipped regions with red:

```wolfram
Plot[Tan[x], {x, 0, 2 Pi}, ClippingStyle -> Red]
```

Use dashed lines for clipped portions:

```wolfram
Plot[Tan[x], {x, 0, 2 Pi}, ClippingStyle -> Dashed]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClippingStyle.html) for more details.*