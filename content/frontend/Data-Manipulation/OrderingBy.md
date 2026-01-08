---
title: OrderingBy
---

`OrderingBy[list, f]` gives the positions in list at which each successive element of `SortBy[list, f]` appears.

- `OrderingBy[list, f, n]` gives the positions in list at which the first n elements of `SortBy[list, f]` appear.
- `OrderingBy[list, f, -n]` gives the positions of the last n elements of `SortBy[list, f]`.
- `OrderingBy[list, f, n, p]` gives positions in list of elements of `SortBy[list, f, p]`.
- `OrderingBy[f]` represents an operator form of `OrderingBy` that can be applied to an expression.

## Examples

```wolfram
OrderingBy[{"apple", "pear", "banana"}, StringLength]
```

```wolfram
OrderingBy[{-3, 1, 5, -2}, Abs, 2]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OrderingBy.html) for more details.