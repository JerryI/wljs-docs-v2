# UndirectedGraphQ

`UndirectedGraphQ[g]` yields `True` if the graph g is an undirected graph and `False` otherwise.

## Examples

Check if a graph is undirected:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3}];
UndirectedGraphQ[g]
(* True *)
```

Directed graph:

```wolfram
g = Graph[{1 -> 2, 2 -> 3}];
UndirectedGraphQ[g]
(* False *)
```

Convert and check:

```wolfram
UndirectedGraphQ[UndirectedGraph[{1 -> 2, 2 -> 3}]]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UndirectedGraphQ.html) for more details.*