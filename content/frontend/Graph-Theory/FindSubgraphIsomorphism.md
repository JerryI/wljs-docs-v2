---
title: FindSubgraphIsomorphism
---

`FindSubgraphIsomorphism[g1, g2]` finds a subgraph isomorphism that maps the graph g1 to a subgraph of g2 by renaming vertices.

`FindSubgraphIsomorphism[g1, g2, n]` finds at most n subgraph isomorphisms.

## Examples

Find a triangle in a complete graph:

```wolfram
FindSubgraphIsomorphism[CycleGraph[3], CompleteGraph[5]]
(* {<|1 -> 1, 2 -> 2, 3 -> 3|>} *)
```

Find multiple isomorphisms:

```wolfram
FindSubgraphIsomorphism[PathGraph[{1, 2}], CompleteGraph[4], 3]
(* Three edge mappings *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindSubgraphIsomorphism.html) for more details.