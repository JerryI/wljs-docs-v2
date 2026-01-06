---
title: GroupBy
---

`GroupBy[{elem1, elem2, ...}, f]` gives an association that groups elements into lists associated with distinct keys `f[elemi]`.

## Examples

Group by a function:

```wolfram
GroupBy[{1, 2, 3, 4, 5, 6}, EvenQ]
(* <|False -> {1, 3, 5}, True -> {2, 4, 6}|> *)
```

Group strings by first letter:

```wolfram
GroupBy[{"apple", "banana", "avocado", "blueberry"}, StringTake[#, 1] &]
(* <|"a" -> {"apple", "avocado"}, "b" -> {"banana", "blueberry"}|> *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GroupBy.html) for more details.*