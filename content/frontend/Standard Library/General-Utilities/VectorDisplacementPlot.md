# VectorDisplacementPlot

`VectorDisplacementPlot[{vx, vy}, {x, xmin, xmax}, {y, ymin, ymax}]` generates a displacement plot for the vector field {vx, vy} as a function of x and y.

- `VectorDisplacementPlot[{vx, vy}, {x, y} ∈ reg]` plots the displacement over the geometric region reg.
- `VectorDisplacementPlot[{{vx, vy}, s}, …]` uses the scalar field s to style the displacement.

## Examples

```wolfram
VectorDisplacementPlot[{Sin[x], Cos[y]}, {x, -2, 2}, {y, -2, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorDisplacementPlot.html) for more details.*