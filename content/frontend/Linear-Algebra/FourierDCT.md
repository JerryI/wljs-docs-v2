---
title: FourierDCT
---

`FourierDCT[list]` finds the Fourier discrete cosine transform of a list of real numbers.

`FourierDCT[list,m]` finds the Fourier discrete cosine transform of type m.

## Examples

```wolfram
FourierDCT[{1, 2, 3, 4}]
(* {5., -2.23044, 0., -0.158384} *)
```

```wolfram
FourierDCT[{1, 0, -1, 0}, 2]
(* DCT type 2 result *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierDCT.html) for more details.