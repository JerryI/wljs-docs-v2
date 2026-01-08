---
title: TimeValue
---

`TimeValue[s, i, t]` calculates the time value of a security s at time t for an interest specified by i.

## Examples

Calculate future value with simple interest:

```wolfram
TimeValue[1000, .05, 10]
```

Present value calculation:

```wolfram
TimeValue[Annuity[100, 10], .08, 0]
```

Time value with compound interest:

```wolfram
TimeValue[1000, EffectiveInterest[.06, 12], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeValue.html) for more details.