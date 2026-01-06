---
title: MissingQ
---

`MissingQ[expr]` gives `True` if expr has head `Missing`.

## Examples

Test for Missing values:

```wolfram
MissingQ[Missing["NotAvailable"]]
(* True *)

MissingQ[Missing[]]
(* True *)

MissingQ[5]
(* False *)
```

Filter out missing values:

```wolfram
Select[{1, Missing[], 3, Missing["NA"]}, Not @* MissingQ]
(* {1, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MissingQ.html) for more details.*