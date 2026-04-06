---
title: GraphHub
---

`GraphHub[g]` gives the set of vertices with maximum vertex degree in the underlying simple graph of `g`.

- `GraphHub[g, "In"]` gives the set of vertices with maximum vertex in-degree.
- `GraphHub[g, "Out"]` gives the set of vertices with maximum vertex out-degree.
- `GraphHub[{v -> w, …}, …]` uses rules `v -> w` to specify the graph `g`.

## Examples

```wolfram
GraphHub[StarGraph[10]]
```

```wolfram
GraphHub[RandomGraph[{20, 40}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphHub.html) for more details.