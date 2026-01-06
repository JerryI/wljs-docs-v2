# BinCounts

`BinCounts[data]` counts the number of elements of data whose values lie in successive integer bins.

`BinCounts[data, binspec]` counts the number of elements of data whose values lie in successive bins specified by binspec.

## Examples

Count integers in default bins:

```wolfram
BinCounts[{1, 2, 2, 3, 3, 3}]
(* {1, 2, 3} *)
```

Specify bin width:

```wolfram
BinCounts[{0.1, 0.5, 1.2, 1.8, 2.5}, 1]
(* {2, 2, 1} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinCounts.html) for more details.*