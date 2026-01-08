---
title: ListStreamPlot3D
---

`ListStreamPlot3D[varr]` plots streamlines for the vector field given as a 3D array of vectors.

## Examples

3D stream plot:

```wolfram
data = Table[{-y, x, z}, {x, -2, 2, 0.5}, {y, -2, 2, 0.5}, {z, -2, 2, 0.5}];
ListStreamPlot3D[data]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListStreamPlot3D.html) for more details.