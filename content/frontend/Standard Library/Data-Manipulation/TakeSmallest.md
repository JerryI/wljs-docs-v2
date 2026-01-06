# TakeSmallest

`TakeSmallest[data, n]` gives the n smallest elements of data, sorted in ascending order.

`TakeSmallest[n]` represents an operator form.

## Examples

Get 3 smallest elements:

```wolfram
TakeSmallest[{3, 1, 4, 1, 5, 9, 2, 6}, 3]
(* {1, 1, 2} *)
```

From an association:

```wolfram
TakeSmallest[<|"a" -> 5, "b" -> 2, "c" -> 8, "d" -> 1|>, 2]
(* {1, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TakeSmallest.html) for more details.*