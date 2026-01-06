# RadialGradientImage

`RadialGradientImage[gcol]` returns an image with values radially changing from center to corners based on gradient color gcol.

`RadialGradientImage[{pos1,pos2}->gcol]` returns an image where the gradient starts at pos1 and ends at pos2.

`RadialGradientImage[…,size]` returns a radial gradient image of the specified size.

`RadialGradientImage[…,size,"type"]` gives an image converted to the specified type.

## Examples

Create a radial gradient from white to black:

```wolfram
RadialGradientImage[{White, Black}]
```

Specify the size:

```wolfram
RadialGradientImage[{Red, Blue}, {200, 200}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RadialGradientImage.html) for more details.*