---
title: SokalSneathDissimilarity
---

`SokalSneathDissimilarity[u, v]` gives the Sokal–Sneath dissimilarity between Boolean vectors u and v.

This is a measure of dissimilarity between binary vectors used in clustering and classification.

## Examples

```wolfram
SokalSneathDissimilarity[{1, 0, 1, 1}, {1, 1, 0, 1}]
```

```wolfram
SokalSneathDissimilarity[{True, False, True}, {False, False, True}]
```

```wolfram
DistanceMatrix[data, DistanceFunction -> SokalSneathDissimilarity]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SokalSneathDissimilarity.html) for more details.*