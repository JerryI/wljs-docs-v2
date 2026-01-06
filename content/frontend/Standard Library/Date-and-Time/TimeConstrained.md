---
title: TimeConstrained
---

`TimeConstrained[expr, t]` evaluates expr, stopping after t seconds. `TimeConstrained[expr, t, failexpr]` returns failexpr if the time constraint is not met.

## Examples

Limit computation time:

```wolfram
TimeConstrained[Pause[5], 2]
(* $Aborted *)
```

Provide a fallback value on timeout:

```wolfram
TimeConstrained[Pause[5], 1, "Timed out"]
(* "Timed out" *)
```

Successful computation within time limit:

```wolfram
TimeConstrained[2 + 2, 1]
(* 4 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeConstrained.html) for more details.*