# PointLight

`PointLight[col, pt]` is a three-dimensional graphics directive that specifies the point light of color col at position pt to use in coloring 3D surfaces.

- `PointLight[col, pt, att]` uses the point light with geometric attenuation att.

## Examples

```wolfram
Graphics3D[{PointLight[Red, {2, 2, 2}], Sphere[]}]
```

```wolfram
Graphics3D[{PointLight[White, {0, 0, 3}, 0.5], Sphere[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointLight.html) for more details.*