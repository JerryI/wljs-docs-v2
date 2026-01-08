---
title: ReleaseHold
---

`ReleaseHold[expr]` removes `Hold`, `HoldForm`, `HoldPattern`, and `HoldComplete` from expr, allowing evaluation.

## Examples

Evaluate a held expression:

```wolfram
ReleaseHold[Hold[1 + 1]]
(* 2 *)
```

Release HoldForm:

```wolfram
ReleaseHold[HoldForm[2^10]]
(* 1024 *)
```

Nested holds:

```wolfram
ReleaseHold[Hold[Hold[1 + 1]]]
(* Hold[1 + 1] - removes one level *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReleaseHold.html) for more details.