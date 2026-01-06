---
title: Extension
---

`Extension` is an option for various polynomial and algebraic functions that specifies generators for the algebraic number field to be used.

## Examples

Factor over extended field:

```wolfram
Factor[x^2 - 2, Extension -> Sqrt[2]]
(* (x - Sqrt[2])(x + Sqrt[2]) *)
```

Simplify with extension:

```wolfram
FullSimplify[Sqrt[2] + Sqrt[8], Extension -> Sqrt[2]]
(* 3 Sqrt[2] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Extension.html) for more details.*