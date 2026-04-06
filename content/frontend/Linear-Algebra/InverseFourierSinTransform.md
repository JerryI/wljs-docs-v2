---
title: InverseFourierSinTransform
---

`InverseFourierSinTransform[expr, ω, t]` gives the symbolic inverse Fourier sine transform of expr.

- `InverseFourierSinTransform[expr, {ω1, ω2, ...}, {t1, t2, ...}]` gives the multidimensional inverse Fourier sine transform of expr.

## Examples

```wolfram
InverseFourierSinTransform[1/(1 + w^2), w, t]
```

```wolfram
InverseFourierSinTransform[Exp[-w], w, t]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseFourierSinTransform.html) for more details.