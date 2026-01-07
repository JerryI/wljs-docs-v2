---
title: Refine
---

`Refine[expr, assum]` gives the form of expr that would be obtained if symbols in it were replaced by explicit numerical expressions satisfying the assumptions.

`Refine[expr]` uses default assumptions specified by any enclosing `Assuming` constructs.

## Examples

Simplify with assumptions:

```wolfram
Refine[Sqrt[x^2], x > 0]
(* x *)
```

Without assumptions:

```wolfram
Refine[Abs[x], x < 0]
(* -x *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Refine.html) for more details.*