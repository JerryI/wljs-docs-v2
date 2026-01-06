# Wronskian

`Wronskian[{y1, y2, ...}, x]` gives the Wronskian determinant for the functions y1, y2, … depending on x.

- `Wronskian[eqn, y, x]` gives the Wronskian determinant for the basis of the solutions of the linear differential equation eqn with dependent variable y and independent variable x.
- `Wronskian[eqns, {y1, y2, ...}, x]` gives the Wronskian determinant for the system of linear differential equations eqns.

## Examples

```wolfram
Wronskian[{Sin[x], Cos[x]}, x]
```

```wolfram
Wronskian[{Exp[x], Exp[2 x], Exp[3 x]}, x]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Wronskian.html) for more details.*