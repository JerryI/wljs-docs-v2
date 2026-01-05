# Graphics3D

`Graphics3D[primitives, options]` represents a three-dimensional graphical image.

## Examples

Draw a sphere:

```wolfram
Graphics3D[Sphere[{0, 0, 0}, 1]]
```

Multiple 3D primitives:

```wolfram
Graphics3D[{
  Red, Sphere[{0, 0, 0}, 1],
  Blue, Cuboid[{1, 1, 1}, {2, 2, 2}]
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Graphics3D.html) for more details.*