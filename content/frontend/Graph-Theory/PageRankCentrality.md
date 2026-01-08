---
title: PageRankCentrality
---

`PageRankCentrality[g,α]` gives a list of page-rank centralities for the vertices in the graph g and weight α.

`PageRankCentrality[g,α,β]` gives a list of page-rank centralities, using weight α and initial centralities β.

`PageRankCentrality[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

Compute page-rank centralities for a graph:

```wolfram
g = RandomGraph[{10, 20}];
PageRankCentrality[g, 0.85]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PageRankCentrality.html) for more details.