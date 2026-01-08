---
title: MaximalBy
---

`MaximalBy[data, f]` returns a list of the elements e_i of data for which the value of f[e_i] is maximal.

`MaximalBy[data, f, n]` returns a list of the elements corresponding to the n largest f[e_i].

`MaximalBy[f]` represents an operator form of `MaximalBy` that can be applied to an expression.

## Examples

Find maximal elements:

```wolfram
MaximalBy[{1, -2, 3, -4}, Abs]
(* {-4} *)
```

Find elements with longest length:

```wolfram
MaximalBy[{"a", "bb", "ccc", "dd"}, StringLength]
(* {"ccc"} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaximalBy.html) for more details.