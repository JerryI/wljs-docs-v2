---
title: SortBy
---

`SortBy[list, f]` sorts the elements of list in the order defined by applying f to each of them.

## Examples

Sort by length:

```wolfram
SortBy[{"apple", "pie", "banana"}, StringLength]
(* {"pie", "apple", "banana"} *)
```

Sort by absolute value:

```wolfram
SortBy[{3, -1, 2, -5, 4}, Abs]
(* {-1, 2, 3, 4, -5} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SortBy.html) for more details.