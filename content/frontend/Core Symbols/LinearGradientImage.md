# LinearGradientImage

`LinearGradientImage[gcol]` returns an image with values linearly changing from left to right based on gradient color gcol.

- `LinearGradientImage[{pos1, pos2} -> gcol]` returns an image where the gradient starts at pos1 and ends at pos2.
- `LinearGradientImage[…, size]` returns a linear gradient image of the specified size.
- `LinearGradientImage[…, size, "type"]` gives an image converted to the specified type.

## Examples

```wolfram
LinearGradientImage[{Red, Blue}, {100, 100}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearGradientImage.html) for more details.*