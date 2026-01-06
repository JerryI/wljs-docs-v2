---
title: EffectiveInterest
---

`EffectiveInterest[r, q]` gives the effective interest rate corresponding to interest specification r, compounded at time intervals q.

## Examples

Convert annual rate to effective rate:

```wolfram
EffectiveInterest[0.12, 12]
(* effective rate compounded monthly *)
```

Continuous compounding:

```wolfram
EffectiveInterest[0.05, Infinity]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EffectiveInterest.html) for more details.*