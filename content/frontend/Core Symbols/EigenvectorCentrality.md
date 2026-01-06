# EigenvectorCentrality

`EigenvectorCentrality[g]` gives a list of eigenvector centralities for the vertices in the graph g.

`EigenvectorCentrality[g, "In"]` gives a list of in-centralities for a directed graph g.

`EigenvectorCentrality[g, "Out"]` gives a list of out-centralities for a directed graph g.

## Examples

Compute eigenvector centrality:

```wolfram
EigenvectorCentrality[CompleteGraph[5]]
```

For a directed graph:

```wolfram
EigenvectorCentrality[Graph[{1 -> 2, 2 -> 3, 3 -> 1}], "In"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EigenvectorCentrality.html) for more details.*