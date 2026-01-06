# Sphere

`Sphere[p]` represents a unit sphere centered at the point p.

`Sphere[p, r]` represents a sphere of radius r centered at the point p.

`Sphere[{p1, p2, ...}, r]` represents a collection of spheres of radius r.

## Examples

Draw a sphere:

```wolfram
Graphics3D[Sphere[{0, 0, 0}, 1]]
```

Multiple spheres:

```wolfram
Graphics3D[{Red, Sphere[{{0, 0, 0}, {2, 0, 0}}, 0.5]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sphere.html) for more details.*