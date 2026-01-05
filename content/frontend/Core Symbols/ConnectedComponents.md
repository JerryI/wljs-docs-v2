# ConnectedComponents

`ConnectedComponents[g]` gives the connected components of graph g as lists of vertices.

## Examples

Find connected components:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 4 <-> 5}]
ConnectedComponents[g]
(* {{1, 2, 3}, {4, 5}} *)
```

Single connected graph:

```wolfram
ConnectedComponents[CompleteGraph[5]]
(* {{1, 2, 3, 4, 5}} *)
```

Number of components:

```wolfram
Length[ConnectedComponents[g]]
(* 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConnectedComponents.html) for more details.*