# ReverseSortBy

`ReverseSortBy[list, f]` sorts the elements of list using the reverse canonical order defined by applying f to each of them.

- `ReverseSortBy[list, f, p]` sorts the elements of list using the function p to compare pairs of results of applying f to each element.
- `ReverseSortBy[f]` represents an operator form of `ReverseSortBy` that can be applied to an expression.

## Examples

```wolfram
ReverseSortBy[{1, -3, 2, -5}, Abs]
```

```wolfram
ReverseSortBy[{"apple", "pie", "cake"}, StringLength]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReverseSortBy.html) for more details.*