---
title: Union
---

`Union[list1, list2, ...]` gives a sorted list of all distinct elements from any of the lists.

`Union[list]` gives a sorted version of a list with duplicates removed.

## Examples

Union of lists:

```wolfram
Union[{a, b, c}, {b, c, d}]
(* {a, b, c, d} *)
```

Remove duplicates and sort:

```wolfram
Union[{3, 1, 2, 1, 3}]
(* {1, 2, 3} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Union.html) for more details.