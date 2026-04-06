---
title: VertexCorrelationSimilarity
---

`VertexCorrelationSimilarity[g, u, v]` gives the correlation similarity between vertices u and v of the graph g.

- `VertexCorrelationSimilarity[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
VertexCorrelationSimilarity[CompleteGraph[5], 1, 2]
```

```wolfram
VertexCorrelationSimilarity[CycleGraph[6], 1, 3]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexCorrelationSimilarity.html) for more details.