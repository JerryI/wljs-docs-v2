# Mesh

`Mesh` is an option for `Plot3D`, `DensityPlot`, and other plotting functions that specifies what mesh should be drawn.

## Examples

Add mesh to a 3D plot:

```wolfram
Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, Mesh -> 10]
```

No mesh:

```wolfram
Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, Mesh -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Mesh.html) for more details.*