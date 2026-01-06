---
title: VectorMarkers
---

`VectorMarkers` is an option for graphics functions like `VectorPlot`, `ListVectorPlot` and related functions that specifies what markers to draw at the field points plotted.

## Examples

```wolfram
VectorPlot[{y, -x}, {x, -2, 2}, {y, -2, 2}, 
  VectorMarkers -> "Arrow"]
```

```wolfram
ListVectorPlot[data, VectorMarkers -> "Pointer"]
```

```wolfram
VectorPlot[{1, x}, {x, -2, 2}, {y, -2, 2}, 
  VectorMarkers -> Automatic]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorMarkers.html) for more details.*