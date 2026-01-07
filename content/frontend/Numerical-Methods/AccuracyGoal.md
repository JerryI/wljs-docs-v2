---
title: AccuracyGoal
---

`AccuracyGoal` is an option for various numerical operations which specifies how many effective digits of accuracy should be sought in the final result.

## Examples

Use AccuracyGoal in NIntegrate:

```wolfram
NIntegrate[Sin[x], {x, 0, Pi}, AccuracyGoal -> 10]
(* 2. *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AccuracyGoal.html) for more details.*