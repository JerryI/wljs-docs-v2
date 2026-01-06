# FunctionBijective

`FunctionBijective[f, x]` tests whether f(x) = y has exactly one solution x ∈ Reals for each y ∈ Reals.

- `FunctionBijective[f, x, dom]` tests whether f(x) = y has exactly one solution x ∈ dom for each y ∈ dom.
- `FunctionBijective[{f1, f2, ...}, {x1, x2, ...}, dom]` tests multiple functions.
- `FunctionBijective[{funs, xcons, ycons}, xvars, yvars, dom]` tests with constraints.

## Examples

Test if a function is bijective:

```wolfram
FunctionBijective[x^3, x]
```

Test over a restricted domain:

```wolfram
FunctionBijective[x^2, x, PositiveReals]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionBijective.html) for more details.*