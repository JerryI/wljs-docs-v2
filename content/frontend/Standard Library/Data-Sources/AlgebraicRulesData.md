---
title: AlgebraicRulesData
---

`AlgebraicRulesData` is an object returned by `AlgebraicRules`. Its output appears to be a list of rules, but the rules will be used algebraically rather than syntactically by `Replace` and related functions.

## Examples

Create algebraic rules data:

```wolfram
rules = AlgebraicRules[{a^2 + b^2 == 1}, {a, b}];
Head[rules]
(* AlgebraicRulesData *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AlgebraicRulesData.html) for more details.*