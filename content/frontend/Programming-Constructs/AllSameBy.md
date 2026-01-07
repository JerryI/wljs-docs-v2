---
title: AllSameBy
---

`AllSameBy[{e1, e2, ...}, f]` tests whether all the `f[ei]` are the same.

`AllSameBy[f]` represents an operator form of `AllSameBy` that can be applied to an expression.

## Examples

Test if all elements have the same length:

```wolfram
AllSameBy[{"aa", "bb", "cc"}, StringLength]
(* True *)
```

Check if all numbers have the same sign:

```wolfram
AllSameBy[{1, 2, 3}, Sign]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AllSameBy.html) for more details.*