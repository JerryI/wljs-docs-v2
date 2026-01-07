---
title: EdgeTaggedGraphQ
---

`EdgeTaggedGraphQ[g]` yields True if the graph g has edges tagged and False otherwise.

## Examples

```wolfram
EdgeTaggedGraphQ[Graph[{1 <-> 2, 2 <-> 3}]]
(* False *)
```

```wolfram
g = Graph[{Property[1 <-> 2, EdgeTags -> {"a"}], 2 <-> 3}];
EdgeTaggedGraphQ[g]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeTaggedGraphQ.html) for more details.*