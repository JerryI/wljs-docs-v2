---
title: LayeredGraph
---

`LayeredGraph[g]` creates a graph with vertices and edges from the graph g represented as a layered plot.

`LayeredGraph[{e1,e2,…}]` creates a graph with edges ej represented as a layered plot.

`LayeredGraph[{…,w[ei],…}]` creates a graph with edges ei with features defined by the symbolic wrapper w.

`LayeredGraph[…,v->pos]` places the dominant vertex v in the plot at position pos.

## Examples

Create a layered graph from edges:

```wolfram
LayeredGraph[{1 -> 2, 2 -> 3, 1 -> 3}]
```

Create a layered graph from an existing graph:

```wolfram
LayeredGraph[CompleteGraph[4]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LayeredGraph.html) for more details.