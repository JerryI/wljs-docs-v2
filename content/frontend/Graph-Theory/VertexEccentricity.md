---
title: VertexEccentricity
---

`VertexEccentricity[g, s]` gives the length of the longest shortest path from the source s to every other vertex in the graph g.

- `VertexEccentricity[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

```wolfram
g = CompleteGraph[5];
VertexEccentricity[g, 1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexEccentricity.html) for more details.