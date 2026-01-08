---
title: Sort
---

`Sort[list]` sorts the elements of list into canonical order.

`Sort[list, p]` sorts using the ordering function p.

## Examples

Sort a list of numbers:

```wolfram
Sort[{3, 1, 4, 1, 5, 9, 2, 6}]
(* {1, 1, 2, 3, 4, 5, 6, 9} *)
```

Sort in descending order:

```wolfram
Sort[{3, 1, 4, 1, 5}, Greater]
(* {5, 4, 3, 1, 1} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sort.html) for more details.