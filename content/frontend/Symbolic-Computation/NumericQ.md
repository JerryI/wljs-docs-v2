---
title: NumericQ
---

`NumericQ[expr]` gives `True` if expr is a numeric quantity, and `False` otherwise.

## Examples

Test numeric quantities:

```wolfram
NumericQ[3.14]
(* True *)
```

```wolfram
NumericQ[Pi]
(* True *)
```

Symbolic expressions are not numeric:

```wolfram
NumericQ[x + 1]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumericQ.html) for more details.