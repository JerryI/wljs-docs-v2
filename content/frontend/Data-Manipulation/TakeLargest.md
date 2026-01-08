---
title: TakeLargest
---

`TakeLargest[data, n]` gives the n largest elements of data, sorted in descending order.

`TakeLargest[n]` represents an operator form.

## Examples

Get 3 largest elements:

```wolfram
TakeLargest[{3, 1, 4, 1, 5, 9, 2, 6}, 3]
(* {9, 6, 5} *)
```

From an association:

```wolfram
TakeLargest[<|"a" -> 5, "b" -> 2, "c" -> 8, "d" -> 1|>, 2]
(* {8, 5} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TakeLargest.html) for more details.