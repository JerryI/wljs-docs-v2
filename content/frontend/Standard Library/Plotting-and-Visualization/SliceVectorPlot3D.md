---
title: SliceVectorPlot3D
---

`SliceVectorPlot3D[{vx, vy, vz}, surf, {x, xmin, xmax}, {y, ymin, ymax}, {z, zmin, zmax}]` generates a vector plot of the field {vx, vy, vz} over the slice surface surf.

- `SliceVectorPlot3D[{vx, vy, vz}, surf, {x, y, z} ∈ reg]` restricts the surface surf to be within the region reg.
- `SliceVectorPlot3D[{vx, vy, vz}, {surf1, surf2, …}, …]` generates vector plots over several slice surfaces surfi.

## Examples

```wolfram
SliceVectorPlot3D[{y, -x, z}, "CenterPlanes", {x, -1, 1}, {y, -1, 1}, {z, -1, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SliceVectorPlot3D.html) for more details.*