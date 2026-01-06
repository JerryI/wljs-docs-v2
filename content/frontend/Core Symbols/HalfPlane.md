# HalfPlane

`HalfPlane[{p1, p2}, w]` represents the half-plane bounded by the line through p1 and p2 and extended in the direction w.

- `HalfPlane[p, v, w]` represents the half-plane bounded by the line through p along v and extended in the direction w.

## Examples

Create a half-plane:

```wolfram
HalfPlane[{{0, 0}, {1, 1}}, {0, 1}]
```

Visualize a half-plane:

```wolfram
Graphics[{LightBlue, HalfPlane[{{0, 0}, {1, 0}}, {0, 1}]}]
```

Using point and direction:

```wolfram
HalfPlane[{0, 0}, {1, 0}, {0, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HalfPlane.html) for more details.*