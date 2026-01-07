---
title: Parallelization
---

`Parallelization` is an option for `Compile` that specifies whether it should create a compiled function that could run in parallel.

## Examples

```wolfram
Compile[{{x, _Real, 1}}, Total[x^2], Parallelization -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Parallelization.html) for more details.*