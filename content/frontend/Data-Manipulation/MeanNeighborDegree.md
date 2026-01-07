---
title: MeanNeighborDegree
---

`MeanNeighborDegree[g]` gives a list of mean neighbor degrees of vertices for the graph *g*.

- `MeanNeighborDegree[g, "In"]` gives a list of mean neighbor in-degrees.
- `MeanNeighborDegree[g, "Out"]` gives a list of mean neighbor out-degrees.
- `MeanNeighborDegree[{v -> w, ...}, ...]` uses rules *v -> w* to specify the graph *g*.

## Examples

```wolfram
MeanNeighborDegree[CompleteGraph[5]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeanNeighborDegree.html) for more details.*