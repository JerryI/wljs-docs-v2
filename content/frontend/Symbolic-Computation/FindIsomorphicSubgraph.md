---
title: FindIsomorphicSubgraph
---

`FindIsomorphicSubgraph[g1,g2]` finds a subgraph of g1 that is isomorphic to g2.

`FindIsomorphicSubgraph[g1,g2,n]` finds at most n subgraphs.

## Examples

```wolfram
(* Find a triangle subgraph *)
g = RandomGraph[{10, 20}];
triangle = CycleGraph[3];
FindIsomorphicSubgraph[g, triangle]

(* Find multiple matching subgraphs *)
FindIsomorphicSubgraph[g, triangle, 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindIsomorphicSubgraph.html) for more details.