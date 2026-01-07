---
title: ListSliceVectorPlot3D
---

`ListSliceVectorPlot3D[varr, surf]` generates a vector plot from a 3D array varr of vector field values over the slice surface surf.

`ListSliceVectorPlot3D[..., {surf1, surf2, ...}]` generates a slice vector plot over several surfaces surf1, surf2, ....

## Examples

```wolfram
ListSliceVectorPlot3D[Table[{x, y, z}, {x, -1, 1, 0.2}, {y, -1, 1, 0.2}, {z, -1, 1, 0.2}], "CenterPlanes"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListSliceVectorPlot3D.html) for more details.*