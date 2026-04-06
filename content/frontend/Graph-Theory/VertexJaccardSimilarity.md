---
title: VertexJaccardSimilarity
---

`VertexJaccardSimilarity[g,u,v]` gives the Jaccard similarity between vertices u and v of the graph g.

`VertexJaccardSimilarity[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

Compute Jaccard similarity between two vertices:

```wolfram
g = Graph[{1 -> 2, 1 -> 3, 2 -> 3, 2 -> 4, 3 -> 4}];
VertexJaccardSimilarity[g, 1, 4]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexJaccardSimilarity.html) for more details.