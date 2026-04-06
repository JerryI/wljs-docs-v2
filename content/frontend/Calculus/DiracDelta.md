---
title: DiracDelta
---

`DiracDelta[x]` represents the Dirac delta function δ(x).

`DiracDelta[x1,x2,…]` represents the multidimensional Dirac delta function δ(x1,x2,…).

## Examples

Integrate a function with DiracDelta:

```wolfram
Integrate[f[x] DiracDelta[x - a], {x, -Infinity, Infinity}]
(* f[a] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiracDelta.html) for more details.