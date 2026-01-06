---
title: LexicographicSort
---

`LexicographicSort[{e1,e2,…}]` sorts the list of expressions ei in lexicographic order.

`LexicographicSort[{e1,e2,…},p]` compares elements of the ei expressions using the ordering function p.

## Examples

Sort lists lexicographically:

```wolfram
LexicographicSort[{{1, 2}, {1, 1}, {2, 1}}]
(* {{1, 1}, {1, 2}, {2, 1}} *)
```

Sort strings:

```wolfram
LexicographicSort[{"apple", "apricot", "banana"}]
(* {"apple", "apricot", "banana"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LexicographicSort.html) for more details.*