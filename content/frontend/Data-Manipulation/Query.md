---
title: Query
---

`Query[op1, op2, ...]` represents a query that can be applied to a `Dataset`, with successive operators applied at deeper levels.

## Examples

Build and apply a query:

```wolfram
ds = Dataset[{<|"x" -> 1, "y" -> 2|>, <|"x" -> 3, "y" -> 4|>}]

(* Sum all x values *)
ds[Total, "x"]
(* 4 *)

(* Using Query explicitly *)
Query[All, "y"][ds]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Query.html) for more details.