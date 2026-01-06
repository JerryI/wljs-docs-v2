# FunctionAnalytic

`FunctionAnalytic[f, x]` tests whether f(x) is an analytic function for x ∈ Reals.

- `FunctionAnalytic[f, x, dom]` tests whether f(x) is an analytic function for x ∈ dom.
- `FunctionAnalytic[{f1, f2, ...}, {x1, x2, ...}, dom]` tests whether multiple functions are analytic.
- `FunctionAnalytic[{funs, cons}, xvars, dom]` tests analyticity with constraints.

## Examples

Test if a function is analytic:

```wolfram
FunctionAnalytic[Sin[x], x]
```

Test over the complex domain:

```wolfram
FunctionAnalytic[1/x, x, Complexes]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionAnalytic.html) for more details.*