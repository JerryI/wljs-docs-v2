---
title: FunctionPeriod
---

`FunctionPeriod[f, x]` gives a period p of the function f over the reals such that f(x + p) = f(x).

- `FunctionPeriod[f, x, dom]` gives a period with x restricted to the domain dom.
- `FunctionPeriod[{f1, f2, ...}, {x1, x2, ...}, ...]` gives periods for multiple variables.

## Examples

Find the period of Sin:

```wolfram
FunctionPeriod[Sin[x], x]
```

Find the period of Tan:

```wolfram
FunctionPeriod[Tan[x], x]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionPeriod.html) for more details.*