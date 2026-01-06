---
title: FunctionContinuous
---

`FunctionContinuous[f,x]` tests whether f(x) is a real-valued continuous function for x∈Reals.

`FunctionContinuous[f,x,dom]` tests whether f(x) is a continuous function for x∈dom.

`FunctionContinuous[{f1,f2,…},{x1,x2,…},dom]` tests whether f1(x1,x2,…),f2(x1,x2,…),… are continuous functions for x1,x2,…∈dom.

`FunctionContinuous[{funs,cons},xvars,dom]` tests whether funs(xvars) are continuous functions for xvars∈dom restricted by the constraints cons.

## Examples

Test if a polynomial is continuous:

```wolfram
FunctionContinuous[x^2 + 1, x]
(* True *)
```

Test if 1/x is continuous over positive reals:

```wolfram
FunctionContinuous[1/x, x, Reals]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionContinuous.html) for more details.*