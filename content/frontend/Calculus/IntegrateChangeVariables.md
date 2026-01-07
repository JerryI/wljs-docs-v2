---
title: IntegrateChangeVariables
---

`IntegrateChangeVariables[integral, u, trans]` changes the variable in integral to the new variable u using the transformation trans.

`IntegrateChangeVariables[integral, {u, v, ...}, trans]` changes the variables to the new variables u, v, ....

## Examples

```wolfram
IntegrateChangeVariables[Integrate[Sin[x]^2, x], u, u == Sin[x]]
```

```wolfram
IntegrateChangeVariables[Integrate[x^2 Exp[x^3], x], u, u == x^3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntegrateChangeVariables.html) for more details.*