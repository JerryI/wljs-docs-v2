---
title: WattsStrogatzGraphDistribution
---

`WattsStrogatzGraphDistribution[n, p]` represents the Watts–Strogatz graph distribution for n-vertex graphs with rewiring probability p.

- `WattsStrogatzGraphDistribution[n, p, k]` represents the Watts–Strogatz graph distribution for n-vertex graphs with rewiring probability p starting from a 2k-regular graph.

## Examples

```wolfram
RandomGraph[WattsStrogatzGraphDistribution[20, 0.1]]
```

```wolfram
RandomGraph[WattsStrogatzGraphDistribution[50, 0.3, 3]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WattsStrogatzGraphDistribution.html) for more details.