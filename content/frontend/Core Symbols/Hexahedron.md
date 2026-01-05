# Hexahedron

`Hexahedron[{p1, p2, ..., p8}]` represents a filled hexahedron (6-faced polyhedron) with 8 corners.

## Examples

Custom hexahedron:

```wolfram
Graphics3D[Hexahedron[{
  {0, 0, 0}, {1, 0, 0}, {1, 1, 0}, {0, 1, 0},
  {0, 0, 1}, {1, 0, 1}, {1, 1, 1}, {0, 1, 1}
}]]
```

Default hexahedron:

```wolfram
Graphics3D[Hexahedron[]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Hexahedron.html) for more details.*