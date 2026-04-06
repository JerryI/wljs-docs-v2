---
title: WeierstrassEta2
---

`WeierstrassEta2[{g2, g3}]` gives the value η₂ of the Weierstrass zeta function ζ at the half-period ω₂(g₂, g₃).

## Examples

Compute eta2 for specific invariants:

```wolfram
WeierstrassEta2[{4, 5}]
```

Relation to half-periods:

```wolfram
{g2, g3} = {1, 0};
eta2 = WeierstrassEta2[{g2, g3}];
omega2 = WeierstrassHalfPeriods[{g2, g3}][[2]]
```

Numerical value:

```wolfram
N[WeierstrassEta2[{1, 2}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeierstrassEta2.html) for more details.