---
title: EdgeBetweennessCentrality
---

`EdgeBetweennessCentrality[g]` gives a list of betweenness centralities for the edges in the graph g.

## Examples

Compute edge betweenness centrality:

```wolfram
EdgeBetweennessCentrality[Graph[{1 -> 2, 2 -> 3, 1 -> 3}]]
```

Identify important edges:

```wolfram
g = GridGraph[{3, 3}];
EdgeBetweennessCentrality[g]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeBetweennessCentrality.html) for more details.