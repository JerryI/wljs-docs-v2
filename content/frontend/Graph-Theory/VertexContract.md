---
title: VertexContract
---

`VertexContract[g,{v1,v2,…}]` contracts a collection of vertices v1, v2, … into a single vertex of the graph g.

`VertexContract[g,{{v1,v2,…},…}]` contracts several collections of vertices.

`VertexContract[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

Contract two vertices in a graph:

```wolfram
VertexContract[CompleteGraph[5], {1, 2}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexContract.html) for more details.