# FindKClique

`FindKClique[g,k]` finds a largest k-clique in the graph g.

- `FindKClique[g,k,n]` finds a k-clique containing at most n vertices.
- `FindKClique[g,k,{n}]` finds a k-clique containing exactly n vertices.
- `FindKClique[g,k,{nmin,nmax}]` finds a k-clique containing between nmin and nmax vertices.
- `FindKClique[g,k,nspec,s]` finds at most s k-cliques.
- `FindKClique[{g,v},k,…]` finds k-cliques that include the vertex v only.
- `FindKClique[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find a 2-clique *)
g = RandomGraph[{10, 25}];
FindKClique[g, 2]

(* Find multiple k-cliques *)
FindKClique[g, 2, Infinity, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindKClique.html) for more details.*