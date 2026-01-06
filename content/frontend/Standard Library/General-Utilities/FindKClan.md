# FindKClan

`FindKClan[g,k]` finds a largest k-clan in the graph g.

- `FindKClan[g,k,n]` finds a k-clan containing at most n vertices.
- `FindKClan[g,k,{n}]` finds a k-clan containing exactly n vertices.
- `FindKClan[g,k,{nmin,nmax}]` finds a k-clan containing between nmin and nmax vertices.
- `FindKClan[g,k,nspec,s]` finds at most s k-clans.
- `FindKClan[{g,v},k,…]` finds k-clans that include the vertex v only.
- `FindKClan[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find a 2-clan *)
g = RandomGraph[{10, 20}];
FindKClan[g, 2]

(* Find a k-clan of specific size *)
FindKClan[g, 2, {4}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindKClan.html) for more details.*