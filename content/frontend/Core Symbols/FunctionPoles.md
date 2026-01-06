# FunctionPoles

`FunctionPoles[f, x]` finds the poles of the meromorphic function f with the variable x.

- `FunctionPoles[{f, cons}, x]` gives the poles when x is restricted by the constraints cons.

## Examples

Find poles of a rational function:

```wolfram
FunctionPoles[1/(x^2 - 1), x]
```

Find poles of Tan:

```wolfram
FunctionPoles[Tan[x], x]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FunctionPoles.html) for more details.*