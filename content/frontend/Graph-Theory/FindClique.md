---
title: FindClique
---

`FindClique[g]` finds a largest clique in the graph g.

- `FindClique[g,n]` finds a clique containing at most n vertices.
- `FindClique[g,{n}]` finds a clique containing exactly n vertices.
- `FindClique[g,{nmin,nmax}]` finds a clique containing between nmin and nmax vertices.
- `FindClique[g,nspec,s]` finds at most s cliques.
- `FindClique[{g,v},…]` finds cliques that include the vertex v only.
- `FindClique[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find the largest clique *)
g = RandomGraph[{10, 20}];
FindClique[g]

(* Find a clique of specific size *)
FindClique[g, {3}]

(* Find multiple cliques *)
FindClique[g, Infinity, 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindClique.html) for more details.