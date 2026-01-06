---
title: TracePrint
---

`TracePrint[expr]` prints all expressions used in the evaluation of expr. `TracePrint[expr, form]` includes only expressions matching form.

## Examples

Print evaluation steps:

```wolfram
TracePrint[2 + 3]
(* Prints: 2 + 3, then 5 *)
```

Trace specific function:

```wolfram
TracePrint[Length[{a, b, c}], Length]
(* Shows Length evaluations *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TracePrint.html) for more details.*