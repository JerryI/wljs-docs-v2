# TakeLargestBy

`TakeLargestBy[data, f, n]` gives the n elements ei in data for which f[ei] is largest, sorted in descending order.

- `TakeLargestBy[data -> prop, f, n]` gives the property prop for the n elements in data for which f[ei] is largest.
- `TakeLargestBy[data, f, n, p]` uses the ordering function p for sorting.
- `TakeLargestBy[f, n]` represents an operator form of `TakeLargestBy` that can be applied to an expression.

## Examples

```wolfram
TakeLargestBy[{-5, 3, -2, 8, 1}, Abs, 3]
```

```wolfram
TakeLargestBy[{"apple", "banana", "cherry"}, StringLength, 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TakeLargestBy.html) for more details.*