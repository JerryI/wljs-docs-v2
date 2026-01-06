---
title: FunctionDomain
---

`FunctionDomain[f, x]` finds the largest domain of definition of the real function f.

`FunctionDomain[f, x, dom]` considers f to be a function in the domain dom (e.g., Reals, Complexes).

## Examples

Domain of square root:

```wolfram
FunctionDomain[Sqrt[x], x]
(* x >= 0 *)
```

Domain of logarithm:

```wolfram
FunctionDomain[Log[x], x, Reals]
(* x > 0 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionDomain.html) for more details.*