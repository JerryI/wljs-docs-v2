---
title: FindIndependentVertexSet
---

`FindIndependentVertexSet[g]` finds an independent vertex set of the graph g with a maximum number of vertices.

- `FindIndependentVertexSet[g,n]` finds an independent vertex set with at most n vertices.
- `FindIndependentVertexSet[g,{n}]` finds an independent vertex set with exactly n vertices.
- `FindIndependentVertexSet[g,{nmin,nmax}]` finds an independent vertex set containing between nmin and nmax vertices.
- `FindIndependentVertexSet[g,nspec,s]` finds at most s independent vertex sets.
- `FindIndependentVertexSet[{g,v},…]` finds independent sets that include the vertex v only.
- `FindIndependentVertexSet[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find maximum independent vertex set *)
g = PetersenGraph[];
FindIndependentVertexSet[g]

(* Find independent set of specific size *)
FindIndependentVertexSet[g, {3}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindIndependentVertexSet.html) for more details.