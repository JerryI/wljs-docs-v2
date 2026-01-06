# FunctionMonotonicity

`FunctionMonotonicity[f, x]` finds the monotonicity of the function f with the variable x over the reals.

- `FunctionMonotonicity[f, x, dom]` finds the monotonicity when x is restricted to the domain dom.
- `FunctionMonotonicity[{f, cons}, x, dom]` gives the monotonicity when x is restricted by constraints.

## Examples

Find monotonicity of an increasing function:

```wolfram
FunctionMonotonicity[x^3, x]
```

Test on positive reals:

```wolfram
FunctionMonotonicity[1/x, x, PositiveReals]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionMonotonicity.html) for more details.*