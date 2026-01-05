# DominatorVertexList

`DominatorVertexList[g, r]` gives the list of dominators of the directed graph g from the root vertex r.

## Examples

Find the dominator vertices of a directed graph:

```wolfram
g = Graph[{1 -> 2, 1 -> 3, 2 -> 4, 3 -> 4}];
DominatorVertexList[g, 1]
(* {{1}, {1, 2}, {1, 3}, {1, 4}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DominatorVertexList.html) for more details.*