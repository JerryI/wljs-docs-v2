# FunctionSurjective

`FunctionSurjective[f, x]` tests whether f(x) = y has at least one solution x ∈ Reals for each y ∈ Reals.

- `FunctionSurjective[f, x, dom]` tests whether f(x) = y has at least one solution x ∈ dom for each y ∈ dom.
- `FunctionSurjective[{f1, f2, ...}, {x1, x2, ...}, dom]` tests multiple functions.
- `FunctionSurjective[{funs, xcons, ycons}, xvars, yvars, dom]` tests with constraints.

## Examples

Test if a function is surjective:

```wolfram
FunctionSurjective[x^3, x]
```

Test over positive reals:

```wolfram
FunctionSurjective[Exp[x], x, PositiveReals]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionSurjective.html) for more details.*