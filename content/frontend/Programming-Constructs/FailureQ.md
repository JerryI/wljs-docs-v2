---
title: FailureQ
---

`FailureQ[expr]` gives `True` if expr has head `Failure` or is `$Failed` or `$Aborted`.

## Examples

Test for failure:

```wolfram
FailureQ[$Failed]
(* True *)

FailureQ[Failure["Error", <||>]]
(* True *)

FailureQ[5]
(* False *)
```

Conditional handling:

```wolfram
result = computation[];
If[FailureQ[result], "Error", result]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FailureQ.html) for more details.*