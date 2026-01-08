---
title: IsomorphicSubgraphQ
---

`IsomorphicSubgraphQ[g1, g2]` yields `True` if the graph g1 is isomorphic to a subgraph of the graph g2.

This function tests for subgraph isomorphism.

## Examples

```wolfram
IsomorphicSubgraphQ[PathGraph[{1, 2, 3}], CompleteGraph[5]]
```

```wolfram
IsomorphicSubgraphQ[CycleGraph[3], PetersenGraph[]]
```

```wolfram
IsomorphicSubgraphQ[CompleteGraph[4], CompleteGraph[3]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IsomorphicSubgraphQ.html) for more details.*