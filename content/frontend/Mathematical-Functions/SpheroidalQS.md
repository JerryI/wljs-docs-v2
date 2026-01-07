---
title: SpheroidalQS
---

`SpheroidalQS[n, m, γ, z]` gives the angular spheroidal function QS_n,m(γ,z) of the second kind.

This is a special function used in solving wave equations in spheroidal coordinates.

## Examples

```wolfram
SpheroidalQS[2, 1, 1.0, 0.5]
```

```wolfram
Plot[SpheroidalQS[2, 0, 1, x], {x, -1, 1}]
```

```wolfram
N[SpheroidalQS[3, 1, 2, 0.3]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpheroidalQS.html) for more details.*