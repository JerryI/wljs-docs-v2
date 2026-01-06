---
title: RelationGraph
---

`RelationGraph[f, {v1, v2, ...}]` gives the graph with vertices vi and edges from vi to vj whenever f[vi, vj] is `True`.

- `RelationGraph[f, {v1, v2, ...}, {w1, w2, ...}]` gives the graph with vertices vi, wj and edges from vi to wj whenever f[vi, wj] is `True`.

## Examples

```wolfram
RelationGraph[Divisible, Range[10]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RelationGraph.html) for more details.*