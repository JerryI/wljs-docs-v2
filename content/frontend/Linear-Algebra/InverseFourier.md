---
title: InverseFourier
---

`InverseFourier[list]` finds the discrete inverse Fourier transform of a list of complex numbers.

## Examples

Reconstruct original signal:

```wolfram
data = {1, 2, 3, 4};
ft = Fourier[data];
InverseFourier[ft]
(* {1., 2., 3., 4.} *)
```

Round-trip verification:

```wolfram
Chop[InverseFourier[Fourier[{1, 0, 1, 0}]]]
(* {1., 0., 1., 0.} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseFourier.html) for more details.