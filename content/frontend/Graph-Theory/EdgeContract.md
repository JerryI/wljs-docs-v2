---
title: EdgeContract
---

`EdgeContract[g, e]` contracts the edge e of the graph g.

`EdgeContract[g, {e1, e2, ...}]` contracts a collection of edges e1, e2, ....

`EdgeContract[{v -> w, ...}, ...]` uses rules v->w to specify the graph g.

## Examples

Contract an edge:

```wolfram
EdgeContract[CycleGraph[4], 1 <-> 2]
(* Graph with 3 vertices *)
```

Contract multiple edges:

```wolfram
EdgeContract[CompleteGraph[4], {1 <-> 2, 3 <-> 4}]
(* Graph with 2 vertices *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeContract.html) for more details.