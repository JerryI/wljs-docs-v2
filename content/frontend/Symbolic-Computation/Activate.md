---
title: Activate
---

`Activate[expr]` replaces all instances of `Inactive[f]` in expr with f.

`Activate[expr, patt]` replaces only instances of `Inactive[f]` for which f matches the pattern patt.

## Examples

Activate an inactive expression:

```wolfram
Activate[Inactive[Plus][2, 3]]
(* 5 *)
```

Selectively activate only certain functions:

```wolfram
Activate[Inactive[Plus][Inactive[Times][2, 3], 4], Times]
(* Inactive[Plus][6, 4] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Activate.html) for more details.