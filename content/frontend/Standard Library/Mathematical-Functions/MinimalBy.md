---
title: MinimalBy
---

`MinimalBy[data, f]` returns a list of the elements e_i of data for which the value of f is minimal.

`MinimalBy[data, f, n]` returns a list of the elements corresponding to the n smallest f[e_i].

`MinimalBy[f]` represents an operator form of `MinimalBy` that can be applied to an expression.

## Examples

Find minimal elements:

```wolfram
MinimalBy[{1, -2, 3, -4}, Abs]
(* {1} *)
```

Find elements with shortest length:

```wolfram
MinimalBy[{"a", "bb", "ccc", "dd"}, StringLength]
(* {"a"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinimalBy.html) for more details.*