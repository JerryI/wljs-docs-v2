---
title: Row
---

`Row[{expr1, expr2, ...}]` arranges expressions in a horizontal row. `Row[list, separator]` inserts a separator between elements.

## Examples

Arrange items horizontally:

```wolfram
Row[{"a", "b", "c"}]
(* abc *)

(* With separator *)
Row[{1, 2, 3, 4, 5}, ", "]
(* 1, 2, 3, 4, 5 *)

Row[{Red, Green, Blue}, " | "]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Row.html) for more details.*