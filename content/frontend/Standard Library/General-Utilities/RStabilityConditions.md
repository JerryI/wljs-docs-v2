# RStabilityConditions

`RStabilityConditions[eqn, a[n], n]` gives the fixed points and stability conditions for a recurrence equation.

- `RStabilityConditions[{eqn1, eqn2, ...}, {a1[n], a2[n], ...}, n]` gives the fixed points and stability conditions for a system of recurrence equations.
- `RStabilityConditions[{eqn1, eqn2, ...}, {a1[n], a2[n], ...}, n, {pnt1, pnt2, ...}]` gives stability conditions only for the given fixed points.

This function analyzes the stability of recurrence equations.

## Examples

```wolfram
RStabilityConditions[a[n + 1] == r*a[n]*(1 - a[n]), a[n], n]
```

```wolfram
RStabilityConditions[x[n + 1] == 2 x[n] - x[n]^2, x[n], n]
```

```wolfram
RStabilityConditions[{x[n + 1] == x[n] + y[n], y[n + 1] == x[n]*y[n]}, 
  {x[n], y[n]}, n]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RStabilityConditions.html) for more details.*