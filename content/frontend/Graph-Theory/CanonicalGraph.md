---
title: CanonicalGraph
---

`CanonicalGraph[g]` gives a canonical form of the graph g.

`CanonicalGraph[{v -> w, ...}]` uses rules to specify the graph.

## Examples

Get canonical form of a graph:

```wolfram
CanonicalGraph[Graph[{1 -> 2, 2 -> 3, 3 -> 1}]]
```

Compare graphs:

```wolfram
CanonicalGraph[CycleGraph[5]] === CanonicalGraph[Graph[{1->2, 2->3, 3->4, 4->5, 5->1}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CanonicalGraph.html) for more details.