# ReactionPDETerm

`ReactionPDETerm[vars, a]` represents a reaction term a u with reaction coefficient a and with model variables vars.

`ReactionPDETerm[{u, {x1, …, xn}}, a, pars]` uses model parameters pars.

## Examples

Create a reaction term:

```wolfram
ReactionPDETerm[{u[t, x], {t, x}}, k]
```

Use in a PDE system:

```wolfram
eq = ReactionPDETerm[{c[t, x], {t, x}}, -k c[t, x]];
NDSolve[{eq == 0, c[0, x] == Exp[-x^2]}, c, {t, 0, 1}, {x, -5, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReactionPDETerm.html) for more details.*