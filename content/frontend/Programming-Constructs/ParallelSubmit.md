---
title: ParallelSubmit
---

`ParallelSubmit[expr]` submits expr for evaluation on the next available parallel kernel and returns an EvaluationObject expression representing the submitted evaluation.

- `ParallelSubmit[{var1, var2, ...}, expr]` builds a closure for the variables given before submitting expr.

## Examples

```wolfram
ParallelSubmit[1 + 1]
```

```wolfram
x = 5;
ParallelSubmit[{x}, x^2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParallelSubmit.html) for more details.*