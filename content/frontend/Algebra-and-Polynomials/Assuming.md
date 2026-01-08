---
title: Assuming
---

`Assuming[assum, expr]` evaluates expr with assum appended to $Assumptions, so that assum is included in the default assumptions used by functions such as Refine, Simplify, and Integrate.

## Examples

```wolfram
Assuming[x > 0, Simplify[Sqrt[x^2]]]
(* x *)
```

```wolfram
Assuming[n ∈ Integers, Integrate[Sin[n x], {x, 0, 2 Pi}]]
(* 0 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Assuming.html) for more details.