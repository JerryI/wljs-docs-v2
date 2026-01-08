---
title: FindGraphCommunities
---

`FindGraphCommunities[g]` finds communities in the graph g.

`FindGraphCommunities[{v->w,…}]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find communities in a social network *)
g = RandomGraph[{20, 40}];
FindGraphCommunities[g]

(* Visualize communities *)
communities = FindGraphCommunities[g];
CommunityGraphPlot[g, communities]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindGraphCommunities.html) for more details.