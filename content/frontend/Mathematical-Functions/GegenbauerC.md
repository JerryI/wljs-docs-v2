---
title: GegenbauerC
---

`GegenbauerC[n, m, x]` gives the Gegenbauer polynomial C_n^(m)(x).

- `GegenbauerC[n, x]` gives the renormalized form.

## Examples

Compute a Gegenbauer polynomial:

```wolfram
GegenbauerC[3, 1, x]
```

Plot Gegenbauer polynomials:

```wolfram
Plot[Table[GegenbauerC[n, 1, x], {n, 0, 4}], {x, -1, 1}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GegenbauerC.html) for more details.