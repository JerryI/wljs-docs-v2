# Pyramid

`Pyramid[{p1, ..., p5}]` represents a filled pyramid with base {p1, ..., p4} and apex p5.

## Examples

3D pyramid:

```wolfram
Graphics3D[Pyramid[{
  {0, 0, 0}, {1, 0, 0}, {1, 1, 0}, {0, 1, 0},
  {0.5, 0.5, 1}
}]]
```

Default pyramid:

```wolfram
Graphics3D[{Yellow, Pyramid[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Pyramid.html) for more details.*