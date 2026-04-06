---
title: FourierCosTransform
---

`FourierCosTransform[expr, t, ω]` gives the symbolic Fourier cosine transform of expr.

- `FourierCosTransform[expr, {t1, t2, ...}, {ω1, ω2, ...}]` gives the multidimensional Fourier cosine transform of expr.

## Examples

Compute the Fourier cosine transform:

```wolfram
FourierCosTransform[Exp[-t^2], t, ω]
```

Transform a Gaussian function:

```wolfram
FourierCosTransform[Exp[-a t] UnitStep[t], t, ω, Assumptions -> a > 0]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierCosTransform.html) for more details.