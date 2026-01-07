---
title: Orderless
---

`Orderless` is an attribute that can be assigned to a symbol f to indicate that the elements in expressions of the form `f[e1, e2, …]` should automatically be sorted into canonical order.

## Examples

Define orderless function:

```wolfram
SetAttributes[f, Orderless];
f[c, a, b]
(* f[a, b, c] *)
```

Check attributes:

```wolfram
Attributes[Plus]
(* {Flat, Listable, NumericFunction, OneIdentity, Orderless, Protected} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Orderless.html) for more details.*