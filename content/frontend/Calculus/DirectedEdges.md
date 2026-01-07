---
title: DirectedEdges
---

`DirectedEdges` is an option for `Graph`, `GraphPlot`, and related functions that specifies whether edges should be taken to be directed.

## Examples

Create undirected graph with directed edges option:

```wolfram
Graph[{1 -> 2, 2 -> 3}, DirectedEdges -> False]
```

With GraphPlot:

```wolfram
GraphPlot[{1 -> 2, 2 -> 3}, DirectedEdges -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirectedEdges.html) for more details.*