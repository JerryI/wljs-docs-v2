---
title: HoldForm
---

`HoldForm[expr]` prints as the expression expr, with expr maintained in an unevaluated form (unlike `Hold`, doesn't show the wrapper).

## Examples

Display unevaluated expression:

```wolfram
HoldForm[1 + 1]
(* 1 + 1 - displays without wrapper *)
```

Compare with Hold:

```wolfram
Hold[2 + 3]
(* Hold[2 + 3] *)

HoldForm[2 + 3]
(* 2 + 3 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HoldForm.html) for more details.