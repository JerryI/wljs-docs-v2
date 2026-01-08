---
title: Select
---

`Select[data, crit]` picks out all elements ei of data for which crit[ei] is True.

`Select[data, crit, n]` picks out the first n elements for which crit[ei] is True.

`Select[crit]` represents an operator form of Select that can be applied to an expression.

## Examples

Select even numbers:

```wolfram
Select[{1, 2, 3, 4, 5, 6}, EvenQ]
(* {2, 4, 6} *)
```

Select with a custom condition:

```wolfram
Select[{-3, -1, 0, 2, 5}, # > 0 &]
(* {2, 5} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Select.html) for more details.