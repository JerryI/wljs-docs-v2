# VectorDisplacementPlot3D

`VectorDisplacementPlot3D[{vx, vy, vz}, {x, xmin, xmax}, {y, ymin, ymax}, {z, zmin, zmax}]` generates a displacement plot of the vector field {vx, vy, vz} as a function of x, y, and z.

- `VectorDisplacementPlot3D[{vx, vy, vz}, {x, y, z} ∈ reg]` plots the displacement over the geometric region reg.
- `VectorDisplacementPlot3D[{{vx, vy, vz}, s}, ...]` uses the scalar field s to style the displacement.

## Examples

```wolfram
VectorDisplacementPlot3D[{x, y, z}/10, {x, -1, 1}, {y, -1, 1}, {z, -1, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorDisplacementPlot3D.html) for more details.*