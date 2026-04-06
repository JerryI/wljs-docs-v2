---
title: ListFourierSequenceTransform
---

`ListFourierSequenceTransform[list, ω]` gives the discrete-time Fourier transform (DTFT) of a list as a function of the parameter ω.

- `ListFourierSequenceTransform[list, ω, k]` places the first element of list at integer time k on the infinite time axis.
- `ListFourierSequenceTransform[list, {ω1, ω2, ...}, {k1, k2, ...}]` gives the multidimensional discrete-time Fourier transform.

## Examples

Compute the DTFT of a sequence:
```wolfram
ListFourierSequenceTransform[{1, 2, 3, 4}, ω]
```

Evaluate at a specific frequency:
```wolfram
ListFourierSequenceTransform[{1, 1, 1, 1}, ω] /. ω -> Pi/4
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListFourierSequenceTransform.html) for more details.