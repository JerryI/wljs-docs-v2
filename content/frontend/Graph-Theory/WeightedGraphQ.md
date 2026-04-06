---
title: WeightedGraphQ
---

`WeightedGraphQ[g]` yields True if the graph g is a weighted graph and False otherwise.

## Examples

Check if graph is weighted:
```wolfram
WeightedGraphQ[Graph[{1 -> 2, 2 -> 3}, EdgeWeight -> {1, 2}]]
```

Unweighted graph:
```wolfram
WeightedGraphQ[Graph[{1 -> 2, 2 -> 3}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeightedGraphQ.html) for more details.