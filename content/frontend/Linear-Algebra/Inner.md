---
title: Inner
---

`Inner[f, list1, list2, g]` is a generalization of `Dot` where `f` replaces multiplication and `g` replaces addition.

## Examples

Generalized inner products:

```wolfram
(* Standard dot product: Inner[Times, ..., Plus] *)
Inner[Times, {a, b, c}, {x, y, z}, Plus]
(* a x + b y + c z *)

(* Custom operations *)
Inner[f, {a, b}, {x, y}, g]
(* g[f[a, x], f[b, y]] *)

(* Boolean inner product *)
Inner[And, {True, False, True}, {True, True, False}, Or]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Inner.html) for more details.*