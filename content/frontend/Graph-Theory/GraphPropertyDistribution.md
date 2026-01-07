---
title: GraphPropertyDistribution
---

`GraphPropertyDistribution[expr, x \[Distributed] gdist]` represents the distribution of the property expr where the random variable x follows the graph distribution gdist.

`GraphPropertyDistribution[expr, {x1 \[Distributed] gdist1, x2 \[Distributed] gdist2, ...}]` represents the distribution where x1, x2, ... are independent and follow the graph distributions gdist1, gdist2, ....

## Examples

Define a distribution of vertex counts:

```wolfram
GraphPropertyDistribution[VertexCount[g], g \[Distributed] RandomGraph[{10, 20}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphPropertyDistribution.html) for more details.*