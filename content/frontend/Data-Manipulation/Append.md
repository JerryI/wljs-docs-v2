---
title: Append
---

`Append[expr, elem]` gives expr with elem appended.

`Append[elem]` represents an operator form of Append that can be applied to an expression.

## Examples

Append an element to a list:

```wolfram
Append[{a, b, c}, d]
(* {a, b, c, d} *)
```

Using the operator form:

```wolfram
Append[x][{1, 2, 3}]
(* {1, 2, 3, x} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Append.html) for more details.