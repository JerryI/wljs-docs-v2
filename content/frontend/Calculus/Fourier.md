---
title: Fourier
---

`Fourier[list]` finds the discrete Fourier transform of a list of complex numbers.

## Examples

DFT of a simple signal:

```wolfram
Fourier[{1, 1, 1, 1, 0, 0, 0, 0}]
(* {1.41421, 0.5 + 0.5 I, 0, 0.5 - 0.5 I, 0, ...} *)
```

Sinusoidal signal:

```wolfram
data = Table[Sin[2 Pi k / 8], {k, 0, 7}];
Abs[Fourier[data]]
(* {0, 0, 1.41, 0, 0, 0, 1.41, 0} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Fourier.html) for more details.