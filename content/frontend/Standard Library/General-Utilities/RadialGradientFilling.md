# RadialGradientFilling

`RadialGradientFilling[{col1, col2, ..., coln}]` is a two-dimensional graphics directive specifying that faces of polygons and other filled graphics objects are to be drawn using concentric circles of colors coli.

- `RadialGradientFilling[{r1, r2, ..., rn} -> {col1, col2, ..., coln}]` uses the colors coli at radii ri.
- `RadialGradientFilling[{r1, r2, ..., rn} -> {col1, col2, ..., coln}, {x, y}]` radiates from the center point {x, y}.
- `RadialGradientFilling[{r1, r2, ..., rn} -> {col1, col2, ..., coln}, {{x, y}, {r1, r2}}]` radiates from the center point {x, y} in concentric axis-aligned ellipsoids.
- `RadialGradientFilling[{r1, r2, ..., rn} -> {col1, col2, ..., coln}, {{x, y}, {r1, r2}}, padding]` uses the specified padding.

## Examples

Simple radial gradient:

```wolfram
Graphics[{RadialGradientFilling[{Red, Yellow, Blue}], Disk[]}]
```

With center point:

```wolfram
Graphics[{RadialGradientFilling[{Red, Blue}, {0.5, 0.5}], Rectangle[]}]
```

On a polygon:

```wolfram
Graphics[{RadialGradientFilling[{White, Purple}], 
  Polygon[{{0, 0}, {1, 0}, {0.5, 1}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RadialGradientFilling.html) for more details.*