# SliceDensityPlot3D

`SliceDensityPlot3D[f, surf, {x, xmin, xmax}, {y, ymin, ymax}, {z, zmin, zmax}]` generates a density plot of f over the slice surface surf as a function of x, y, and z.

- `SliceDensityPlot3D[f, surf, {x, y, z} ∈ reg]` restricts the surface to be within region reg.
- `SliceDensityPlot3D[f, {surf1, surf2, …}, …]` generates density plots over several slices.

## Examples

```wolfram
SliceDensityPlot3D[x^2 + y^2 - z^2, "CenterPlanes", {x, -1, 1}, {y, -1, 1}, {z, -1, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SliceDensityPlot3D.html) for more details.*