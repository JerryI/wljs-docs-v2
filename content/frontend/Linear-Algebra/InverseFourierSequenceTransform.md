---
title: InverseFourierSequenceTransform
---

`InverseFourierSequenceTransform[expr, ω, n]` gives the inverse discrete-time Fourier transform of expr.

- `InverseFourierSequenceTransform[expr, {ω1, ω2, ...}, {n1, n2, ...}]` gives the multidimensional inverse Fourier sequence transform.

## Examples

```wolfram
InverseFourierSequenceTransform[1/(1 - a Exp[-I ω]), ω, n]
```

```wolfram
InverseFourierSequenceTransform[Sin[ω], ω, n]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseFourierSequenceTransform.html) for more details.