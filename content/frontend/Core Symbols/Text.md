# Text

`Text[expr, coords]` is a graphics primitive that displays text at the specified coordinates. `Text[expr, coords, offset]` allows offset positioning.

## Examples

Add text to graphics:

```wolfram
Graphics[{
  Point[{0, 0}],
  Text["Origin", {0, 0}, {-1, -1}],
  Red, Point[{1, 1}],
  Text[Style["(1,1)", Bold], {1, 1}, {-1, 0}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Text.html) for more details.*