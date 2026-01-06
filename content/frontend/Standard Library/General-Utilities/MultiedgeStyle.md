---
title: MultiedgeStyle
---

`MultiedgeStyle` is an option for `GraphPlot` and related functions that specifies how to draw multiple edges.

This option controls the visual appearance of parallel edges between nodes.

## Examples

```wolfram
Graph[{1 -> 2, 1 -> 2, 2 -> 3}, MultiedgeStyle -> 0.2]
```

```wolfram
GraphPlot[{1 -> 2, 1 -> 2}, MultiedgeStyle -> All]
```

```wolfram
Graph[edges, MultiedgeStyle -> None]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MultiedgeStyle.html) for more details.*