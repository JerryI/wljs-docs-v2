---
title: SpatialGraphDistribution
---

`SpatialGraphDistribution[n,r]` represents a spatial distribution for graphs with n vertices uniformly distributed over the unit square and edges between vertices that are at distance at most r.

`SpatialGraphDistribution[n,r,d]` represents a spatial distribution for graphs with vertices uniformly distributed over the d-dimensional unit square.

`SpatialGraphDistribution[n,r,dist]` represents a spatial distribution for graphs with vertices distributed according to the probability distribution dist.

`SpatialGraphDistribution[n,r,reg]` represents a spatial distribution for graphs with vertices uniformly distributed in the region reg.

## Examples

Generate a random spatial graph:

```wolfram
RandomGraph[SpatialGraphDistribution[20, 0.3]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialGraphDistribution.html) for more details.