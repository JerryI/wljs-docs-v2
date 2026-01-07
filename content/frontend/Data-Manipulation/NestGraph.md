---
title: NestGraph
---

`NestGraph[f,expr,n]` gives the graph obtained by starting with expr and applying f successively n times.

`NestGraph[f,{expr1,expr2,…},n]` gives the graph obtained by applying f to expr1, expr2, ….

`NestGraph[f,graph,n]` gives the graph obtained by applying f to the vertices of graph and extending the graph.

## Examples

Create a graph by nesting a function:

```wolfram
NestGraph[{# + 1, 2 #} &, 1, 4]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NestGraph.html) for more details.*