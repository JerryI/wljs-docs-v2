---
title: EdgeList
---

`EdgeList[g]` gives the list of edges in graph `g`.

## Examples

Get edges from a graph:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 1}]

EdgeList[g]
(* {1 <-> 2, 2 <-> 3, 1 <-> 3} *)

Length[EdgeList[CompleteGraph[5]]]
(* 10 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeList.html) for more details.*