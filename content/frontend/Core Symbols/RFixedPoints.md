# RFixedPoints

`RFixedPoints[eqn, a[n], n]` gives the fixed points for a recurrence equation.

- `RFixedPoints[{eqn1, eqn2, ...}, {a1[n], a2[n], ...}, n]` gives the fixed points for a system of recurrence equations.

## Examples

```wolfram
RFixedPoints[a[n + 1] == 2 a[n] (1 - a[n]), a[n], n]
```

```wolfram
RFixedPoints[a[n + 1] == a[n]^2, a[n], n]
```

```wolfram
RFixedPoints[{x[n + 1] == y[n], y[n + 1] == x[n]}, {x[n], y[n]}, n]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RFixedPoints.html) for more details.*