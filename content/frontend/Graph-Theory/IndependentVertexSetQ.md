---
title: IndependentVertexSetQ
---

`IndependentVertexSetQ[g, vlist]` yields `True` if the vertex list vlist is an independent vertex set in the graph g, and `False` otherwise.

## Examples

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4}];
IndependentVertexSetQ[g, {1, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IndependentVertexSetQ.html) for more details.*