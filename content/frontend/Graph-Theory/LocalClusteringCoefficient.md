---
title: LocalClusteringCoefficient
---

`LocalClusteringCoefficient[g]` gives the list of local clustering coefficients of all vertices in the graph g.

- `LocalClusteringCoefficient[g, v]` gives the local clustering coefficient of the vertex v in the graph g.
- `LocalClusteringCoefficient[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

All clustering coefficients:

```wolfram
g = RandomGraph[{10, 20}];
LocalClusteringCoefficient[g]
```

For specific vertex:

```wolfram
LocalClusteringCoefficient[g, 1]
```

Complete graph has coefficient 1:

```wolfram
LocalClusteringCoefficient[CompleteGraph[5]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalClusteringCoefficient.html) for more details.