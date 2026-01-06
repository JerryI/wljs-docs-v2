---
title: VectorSizes
---

`VectorSizes` is an option for `VectorPlot` and related functions that specifies the range of sizes used for arrows.

## Examples

```wolfram
VectorPlot[{y, -x}, {x, -2, 2}, {y, -2, 2}, 
  VectorSizes -> {0.1, 0.5}]
```

```wolfram
ListVectorPlot[data, VectorSizes -> Automatic]
```

```wolfram
VectorPlot[{1, x}, {x, -2, 2}, {y, -2, 2}, 
  VectorSizes -> {Small, Large}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorSizes.html) for more details.*