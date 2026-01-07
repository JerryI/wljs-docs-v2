---
title: Return
---

`Return[expr]` returns the value expr from a function.

`Return[]` returns `Null`.

## Examples

Return from a function:

```wolfram
f[x_] := Module[{},
  If[x < 0, Return["negative"]];
  x^2
]
f[-3]
(* "negative" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Return.html) for more details.*