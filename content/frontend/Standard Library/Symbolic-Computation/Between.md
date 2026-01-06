---
title: Between
---

`Between[x, {min, max}]` is equivalent to `min ≤ x ≤ max`.

`Between[{min, max}]` is an operator form that can be applied to an expression.

## Examples

Check if value is in range:

```wolfram
Between[5, {0, 10}]
(* True *)
```

```wolfram
Between[15, {0, 10}]
(* False *)
```

Operator form:

```wolfram
Select[{-5, 0, 5, 10, 15}, Between[{0, 10}]]
(* {0, 5, 10} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Between.html) for more details.*