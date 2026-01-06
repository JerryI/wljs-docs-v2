---
title: MakeRules
---

`MakeRules` is an option to `Solve` and related functions. With `MakeRules -> True`, the result is presented as an `AlgebraicRulesData` object. With `MakeRules -> False`, the result is presented as a list of rules.

## Examples

```wolfram
Solve[x^2 - 4 == 0, x, MakeRules -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MakeRules.html) for more details.*