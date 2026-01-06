# EdgeIndex

`EdgeIndex[g, e]` gives the integer index for the edge e in the graph g.

## Examples

Get edge index:

```wolfram
g = Graph[{a -> b, b -> c, c -> d}];
EdgeIndex[g, b -> c]
(* 2 *)
```

Use with edge list:

```wolfram
EdgeIndex[CompleteGraph[4], 1 <-> 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeIndex.html) for more details.*