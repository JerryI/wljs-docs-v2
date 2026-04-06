---
title: TopologicalSort
---

`TopologicalSort[g]` gives a list of vertices of g in topologically sorted order for a directed acyclic graph g.

- `TopologicalSort[{v -> w, ...}]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
TopologicalSort[Graph[{1 -> 2, 2 -> 3, 1 -> 3}]]
```

```wolfram
TopologicalSort[{a -> b, b -> c, a -> c}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TopologicalSort.html) for more details.