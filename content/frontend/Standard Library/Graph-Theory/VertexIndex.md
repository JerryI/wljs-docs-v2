# VertexIndex

`VertexIndex[g,v]` gives the integer index for the vertex v in the graph g.

`VertexIndex[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

Get the index of a vertex:

```wolfram
g = Graph[{a -> b, b -> c, c -> a}];
VertexIndex[g, b]
(* 2 *)
```

Using edge rules directly:

```wolfram
VertexIndex[{1 -> 2, 2 -> 3}, 3]
(* 3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexIndex.html) for more details.*