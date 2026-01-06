---
title: Conditioned
---

`Conditioned[expr, cond]` or `expr \[Conditioned] cond` represents expr conditioned by the predicate cond.

## Examples

Use conditioned expression:

```wolfram
Integrate[1/x, {x, 0, 1}, Assumptions -> Conditioned[a > 0, a < 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Conditioned.html) for more details.*