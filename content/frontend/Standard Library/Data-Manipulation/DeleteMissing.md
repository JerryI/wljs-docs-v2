---
title: DeleteMissing
---

`DeleteMissing[list]` drops elements with head `Missing` from a list.

`DeleteMissing[assoc]` drops elements whose values have head `Missing` from an association.

`DeleteMissing[expr, n]` applies `DeleteMissing` to lists or associations within the first n levels of expr.

## Examples

Remove missing values:

```wolfram
DeleteMissing[{1, Missing[], 2, Missing["NotFound"], 3}]
(* {1, 2, 3} *)
```

From an association:

```wolfram
DeleteMissing[<|"a" -> 1, "b" -> Missing[], "c" -> 3|>]
(* <|"a" -> 1, "c" -> 3|> *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteMissing.html) for more details.*