---
title: KirchhoffGraph
---

`KirchhoffGraph[kmat]` gives the graph with Kirchhoff matrix `kmat`.

- `KirchhoffGraph[{v1, v2, …}, kmat]` gives the graph with vertices `vi` and Kirchhoff matrix `kmat`.

## Examples

```wolfram
KirchhoffGraph[{{2, -1, -1}, {-1, 2, -1}, {-1, -1, 2}}]
```

```wolfram
KirchhoffGraph[KirchhoffMatrix[CompleteGraph[4]]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KirchhoffGraph.html) for more details.