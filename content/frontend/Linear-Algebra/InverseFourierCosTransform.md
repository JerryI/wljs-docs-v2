---
title: InverseFourierCosTransform
---

`InverseFourierCosTransform[expr, ω, t]` gives the symbolic inverse Fourier cosine transform of `expr`.

- `InverseFourierCosTransform[expr, {ω1, ω2, …}, {t1, t2, …}]` gives the multidimensional inverse Fourier cosine transform of `expr`.

## Examples

```wolfram
InverseFourierCosTransform[1/(1 + ω^2), ω, t]
```

```wolfram
InverseFourierCosTransform[Exp[-ω], ω, t]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseFourierCosTransform.html) for more details.