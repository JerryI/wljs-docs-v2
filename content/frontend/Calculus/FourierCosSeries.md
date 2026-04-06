---
title: FourierCosSeries
---

`FourierCosSeries[expr,t,n]` gives the nth-order Fourier cosine series expansion of expr in t.

`FourierCosSeries[expr,{t1,t2,…},{n1,n2,…}]` gives the multidimensional Fourier cosine series of expr.

## Examples

Compute a 3rd-order Fourier cosine series:

```wolfram
FourierCosSeries[t^2, t, 3]
(* Pi^2/3 - 4 Cos[t] + Cos[2 t] - 4/9 Cos[3 t] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierCosSeries.html) for more details.