---
title: Compile
---

`Compile[{x1, x2, ...}, expr]` creates a compiled function that evaluates expr assuming numerical values of the xi.

`Compile[{{x1, t1}, ...}, expr]` assumes that xi is of a type that matches ti.

`Compile[{{x1, t1, n1}, ...}, expr]` assumes that xi is a rank ni array of objects.

## Examples

Compile a simple function:

```wolfram
cf = Compile[{x}, x^2 + Sin[x]];
cf[2.0]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Compile.html) for more details.