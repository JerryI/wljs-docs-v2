# FunctionSign

`FunctionSign[f, {x1, x2, ...}]` finds the real sign of the function f with variables x1, x2, ... over the reals.

- `FunctionSign[f, {x1, x2, ...}, dom]` finds the sign with variables restricted to the domain dom.
- `FunctionSign[{f, cons}, {x1, x2, ...}, dom]` gives the sign with constraints.

## Examples

Find the sign of x^2:

```wolfram
FunctionSign[x^2, {x}]
```

Find sign over positive reals:

```wolfram
FunctionSign[x^3, {x}, PositiveReals]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionSign.html) for more details.*