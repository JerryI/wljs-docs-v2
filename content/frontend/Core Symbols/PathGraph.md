# PathGraph

`PathGraph[{v1, v2, ...}]` creates a path graph connecting vertices in sequence.

## Examples

Create a path graph:

```wolfram
PathGraph[{1, 2, 3, 4, 5}]
(* Path: 1-2-3-4-5 *)
```

Named vertices:

```wolfram
PathGraph[{"A", "B", "C", "D"}, VertexLabels -> "Name"]
```

Path length:

```wolfram
EdgeCount[PathGraph[Range[10]]]
(* 9 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PathGraph.html) for more details.*