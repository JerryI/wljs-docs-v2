# TransitiveClosureGraph

`TransitiveClosureGraph[g]` gives the transitive closure of the graph g.

- `TransitiveClosureGraph[{v -> w, ...}]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
TransitiveClosureGraph[Graph[{1 -> 2, 2 -> 3}]]
```

```wolfram
TransitiveClosureGraph[{a -> b, b -> c, c -> d}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransitiveClosureGraph.html) for more details.*