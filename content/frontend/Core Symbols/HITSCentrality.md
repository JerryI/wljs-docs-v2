# HITSCentrality

`HITSCentrality[g]` gives a list of authority and hub centralities for the vertices in the graph g.

- `HITSCentrality[{v -> w, ...}]` uses rules v -> w to specify the graph g.

## Examples

Compute HITS centrality for a graph:
```wolfram
HITSCentrality[Graph[{1 -> 2, 2 -> 3, 3 -> 1, 1 -> 3}]]
```

For a web-like graph:
```wolfram
HITSCentrality[DirectedGraph[RandomGraph[{10, 20}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HITSCentrality.html) for more details.*