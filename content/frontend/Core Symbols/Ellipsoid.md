# Ellipsoid

`Ellipsoid[p, {r1, r2, r3}]` represents an axis-aligned ellipsoid centered at p with semiaxes lengths ri.

## Examples

3D ellipsoid:

```wolfram
Graphics3D[Ellipsoid[{0, 0, 0}, {2, 1, 0.5}]]
```

Sphere is a special case:

```wolfram
Graphics3D[Ellipsoid[{0, 0, 0}, {1, 1, 1}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Ellipsoid.html) for more details.*