---
title: ComplexityFunction
---

`ComplexityFunction` is an option for Simplify and other functions which gives a function to rank the complexity of different forms of an expression.

## Examples

Simplify preferring fewer leaves:

```wolfram
Simplify[1/(1 + 1/(1 + 1/x)), ComplexityFunction -> LeafCount]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComplexityFunction.html) for more details.*