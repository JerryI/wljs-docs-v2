---
title: TransformationFunctions
---

`TransformationFunctions` is an option for `Simplify` and `FullSimplify` which gives the list of functions to apply to try to transform parts of an expression.

## Examples

```wolfram
Simplify[Log[Exp[x]], TransformationFunctions -> {Automatic, ExpToTrig}]
```

```wolfram
FullSimplify[expr, TransformationFunctions -> {Log, Exp}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransformationFunctions.html) for more details.*