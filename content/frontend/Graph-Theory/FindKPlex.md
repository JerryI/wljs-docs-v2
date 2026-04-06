---
title: FindKPlex
---

`FindKPlex[g,k]` finds a largest k-plex in the graph g.

- `FindKPlex[g,k,n]` finds a k-plex containing at most n vertices.
- `FindKPlex[g,k,{n}]` finds a k-plex containing exactly n vertices.
- `FindKPlex[g,k,{nmin,nmax}]` finds a k-plex containing between nmin and nmax vertices.
- `FindKPlex[g,k,nspec,s]` finds at most s k-plexes.
- `FindKPlex[{g,v},k,…]` finds k-plexes that include the vertex v only.
- `FindKPlex[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find a 2-plex *)
g = RandomGraph[{10, 20}];
FindKPlex[g, 2]

(* Find a k-plex of specific size *)
FindKPlex[g, 2, {5}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindKPlex.html) for more details.