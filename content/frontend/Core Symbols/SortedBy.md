# SortedBy

`SortedBy` is an option that specifies a function by which to sort the results of a computation.

## Examples

Sort results by length:
```wolfram
Select[data, criteria, SortedBy -> Length]
```

Sort by a custom function:
```wolfram
GroupBy[list, classifier, SortedBy -> Total]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SortedBy.html) for more details.*