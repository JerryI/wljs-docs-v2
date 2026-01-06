# ToonShading

`ToonShading[]` is a three-dimensional graphics directive specifying that surfaces that follow are to be drawn to emulate two-dimensional flat objects (cartoon/cel shading style).

- `ToonShading[col]` uses the color col as base color.
- `ToonShading[{dcol, bcol, hcol}]` uses the dark color dcol, the base color bcol and highlight color hcol.
- `ToonShading[{w1, w2, w3} -> {dcol, bcol, hcol}]` uses the colors dcol, bcol and hcol weighted by the wi.
- `ToonShading["scheme"]` uses the specified discrete color scheme in ColorData.

## Examples

```wolfram
Graphics3D[{ToonShading[], Sphere[]}]
```

```wolfram
Graphics3D[{ToonShading[Red], Cone[]}]
```

```wolfram
Graphics3D[{ToonShading[{Black, Blue, White}], Sphere[]}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToonShading.html) for more details.*