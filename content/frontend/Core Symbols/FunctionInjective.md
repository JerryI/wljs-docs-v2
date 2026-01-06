# FunctionInjective

`FunctionInjective[f, x]` tests whether f(x) = y has at most one solution x ∈ Reals for each y.

- `FunctionInjective[f, x, dom]` tests whether f(x) = y has at most one solution x ∈ dom.
- `FunctionInjective[{f1, f2, ...}, {x1, x2, ...}, dom]` tests multiple functions.
- `FunctionInjective[{funs, xcons, ycons}, xvars, yvars, dom]` tests with constraints.

## Examples

Test if a function is injective:

```wolfram
FunctionInjective[x^3, x]
```

Test over positive reals:

```wolfram
FunctionInjective[x^2, x, PositiveReals]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionInjective.html) for more details.*