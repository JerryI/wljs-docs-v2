---
title: KEdgeConnectedComponents
---

`KEdgeConnectedComponents[g, k]` gives the k-edge-connected components of the graph `g`.

- `KEdgeConnectedComponents[g, k, {v1, v2, …}]` gives the k-edge-connected components that include at least one of the vertices `v1, v2, …`.
- `KEdgeConnectedComponents[{v -> w, …}, …]` uses rules `v -> w` to specify the graph `g`.

## Examples

```wolfram
KEdgeConnectedComponents[RandomGraph[{10, 15}], 2]
```

```wolfram
KEdgeConnectedComponents[PetersenGraph[], 3]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KEdgeConnectedComponents.html) for more details.