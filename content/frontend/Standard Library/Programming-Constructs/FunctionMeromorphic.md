---
title: FunctionMeromorphic
---

`FunctionMeromorphic[f, x]` tests whether f(x) is a meromorphic function of x.

- `FunctionMeromorphic[f, {x1, x2, ...}]` tests for multiple variables.
- `FunctionMeromorphic[{f1, f2, ...}, {x1, x2, ...}]` tests multiple functions.
- `FunctionMeromorphic[{funs, cons}, xvars]` tests with constraints.

## Examples

Test if a function is meromorphic:

```wolfram
FunctionMeromorphic[1/z, z]
```

Test Tan:

```wolfram
FunctionMeromorphic[Tan[z], z]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionMeromorphic.html) for more details.*