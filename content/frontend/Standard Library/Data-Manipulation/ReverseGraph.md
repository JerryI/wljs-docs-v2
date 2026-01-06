---
title: ReverseGraph
---

`ReverseGraph[g]` gives the reverse graph of the directed graph g.

- `ReverseGraph[{v -> w, ...}]` uses rules `v -> w` to specify the graph g.

The reverse graph has all edge directions reversed.

## Examples

```wolfram
ReverseGraph[Graph[{1 -> 2, 2 -> 3, 3 -> 1}]]
```

```wolfram
g = DirectedGraph[PathGraph[{a, b, c, d}]];
ReverseGraph[g]
```

```wolfram
ReverseGraph[{a -> b, b -> c, c -> d}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReverseGraph.html) for more details.*