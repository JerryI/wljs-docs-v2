---
title: Composition
---

`Composition[f, g, h]` represents the composition of functions, applied right to left: `f[g[h[x]]]`.

## Examples

Compose functions:

```wolfram
(* f[g[x]] *)
comp = Composition[Sqrt, Abs]
comp[-4]
(* 2 *)

(* Chain multiple functions *)
Composition[Length, Flatten, Table][i, {i, 3}, {j, i}]
(* 6 *)

(* Using @* operator *)
(Sqrt @* Abs)[-9]
(* 3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Composition.html) for more details.*