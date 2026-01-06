# UndirectedGraph

`UndirectedGraph[g]` gives an undirected graph from the directed graph g.

- `UndirectedGraph[{v -> w, ...}]` uses rules `v -> w` to specify the graph g.

This function converts a directed graph to an undirected graph by removing edge direction.

## Examples

```wolfram
UndirectedGraph[Graph[{1 -> 2, 2 -> 3, 3 -> 1}]]
```

```wolfram
UndirectedGraph[{a -> b, b -> c, c -> d}]
```

```wolfram
g = DirectedGraph[CycleGraph[5]];
UndirectedGraph[g]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UndirectedGraph.html) for more details.*