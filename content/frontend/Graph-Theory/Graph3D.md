---
title: Graph3D
---

`Graph3D[g]` creates a graph with vertices and edges from the graph `g` and represented as a 3D plot.

- `Graph3D[{e1, e2, …}]` creates a graph with edges `ej` and represented as a 3D plot.
- `Graph3D[{v1, v2, …}, {e1, e2, …}]` creates a graph with vertices `vi` and edges `ej`.

## Examples

```wolfram
Graph3D[CompleteGraph[10]]
```

```wolfram
Graph3D[{1 <-> 2, 2 <-> 3, 3 <-> 4, 4 <-> 1, 1 <-> 3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Graph3D.html) for more details.