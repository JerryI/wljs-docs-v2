---
title: RuleCondition
---

`RuleCondition` is an internal symbol used in pattern matching.

## Examples

RuleCondition is typically used internally:

```wolfram
?RuleCondition
```

It appears in transformation rules:

```wolfram
Trace[Replace[{1, 2, 3}, {x_, y_, z_} :> x + y + z]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RuleCondition.html) for more details.*