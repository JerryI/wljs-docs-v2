---
title: MeanDegreeConnectivity
---

`MeanDegreeConnectivity[g]` gives a list of k-mean degree connectivity for the graph g for successive k=0,1,2....

- `MeanDegreeConnectivity[g, "In"]` gives a list of k-mean in-degree connectivity for the graph g.
- `MeanDegreeConnectivity[g, "Out"]` gives a list of k-mean out-degree connectivity for the graph g.
- `MeanDegreeConnectivity[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Get degree connectivity:
```wolfram
MeanDegreeConnectivity[RandomGraph[{100, 200}]]
```

In-degree connectivity:
```wolfram
MeanDegreeConnectivity[graph, "In"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeanDegreeConnectivity.html) for more details.