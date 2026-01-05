# FindGraphPartition

`FindGraphPartition[g]` gives a partition of vertices of the graph g.

`FindGraphPartition[g, k]` gives a partition of vertices into k approximately equal-size parts.

`FindGraphPartition[g, {n1, ..., nk}]` gives a partition of vertices into parts with sizes n1, ..., nk.

`FindGraphPartition[g, {α1, ..., αk}]` gives a partition of vertices into parts with approximate size proportions α1, ..., αk.

`FindGraphPartition[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
FindGraphPartition[PetersenGraph[]]
(* {{1, 2, 6, 7, 9}, {3, 4, 5, 8, 10}} *)
```

```wolfram
FindGraphPartition[CompleteGraph[6], 3]
(* {{1, 4}, {2, 5}, {3, 6}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindGraphPartition.html) for more details.*