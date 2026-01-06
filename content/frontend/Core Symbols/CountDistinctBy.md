# CountDistinctBy

`CountDistinctBy[{e1, e2, ...}, f]` gives the number of distinct values of f[ei] that occur.

`CountDistinctBy[f]` represents an operator form of CountDistinctBy that can be applied to an expression.

## Examples

Count distinct values after applying a function:

```wolfram
CountDistinctBy[{-3, -2, -1, 1, 2, 3}, Abs]
(* 3 *)
```

Count words by length:

```wolfram
CountDistinctBy[{"cat", "dog", "bird", "fish"}, StringLength]
(* 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CountDistinctBy.html) for more details.*