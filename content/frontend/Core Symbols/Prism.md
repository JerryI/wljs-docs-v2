# Prism

`Prism[{p1, ..., p6}]` represents a filled prism connecting two triangular faces.

## Examples

Triangular prism:

```wolfram
Graphics3D[Prism[{
  {0, 0, 0}, {1, 0, 0}, {0.5, 1, 0},
  {0, 0, 1}, {1, 0, 1}, {0.5, 1, 1}
}]]
```

With styling:

```wolfram
Graphics3D[{Blue, Opacity[0.7], Prism[{{0, 0, 0}, {1, 0, 0}, {0.5, 0.8, 0}, {0, 0, 2}, {1, 0, 2}, {0.5, 0.8, 2}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Prism.html) for more details.*