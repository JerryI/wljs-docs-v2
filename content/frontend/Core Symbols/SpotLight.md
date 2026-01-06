# SpotLight

`SpotLight[col, pt, α]` is a 3D graphics directive specifying a spotlight of color col at position pt aimed at the center with half-angle α.

- `SpotLight[col, {pt1, pt2}, α]` uses spotlight at pt1 aimed at pt2.
- `SpotLight[col, {pt, tar}, {α, s}, att]` uses spot exponent s and attenuation att.

## Examples

```wolfram
Graphics3D[{SpotLight[White, {2, 2, 2}, Pi/6], Sphere[]}]
```

```wolfram
Graphics3D[{SpotLight[Yellow, {{3, 0, 3}, {0, 0, 0}}, Pi/8], 
  Cuboid[]}]
```

```wolfram
SpotLight[Red, {1, 1, 1}, Pi/4]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpotLight.html) for more details.*