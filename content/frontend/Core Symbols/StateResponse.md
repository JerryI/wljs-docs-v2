# StateResponse

`StateResponse[sys, u, {t, tmin, tmax}]` gives the numeric state response of the state-space model sys to input u for tmin ≤ t ≤ tmax.

- `StateResponse[sys, {u[0], u[1], ...}]` gives the response of the discrete-time state-space model sys to the input sequence u[i].
- `StateResponse[sys, u, t]` gives the symbolic state response as a function of time t.
- `StateResponse[sys, {u1, ..., um}, ...]` gives the state response for multiple inputs ui.
- `StateResponse[{sys, {x10, x20, ..., xn0}}, ...]` gives the response with initial states xi0.

## Examples

Get the state response of a system:

```wolfram
sys = StateSpaceModel[{{-1, 0}, {0, -2}}, {{1}, {0}}, {{1, 0}}, {{0}}];
StateResponse[sys, UnitStep[t], {t, 0, 5}]
```

Plot the state response:

```wolfram
Plot[Evaluate[StateResponse[sys, UnitStep[t], {t, 0, 5}]], {t, 0, 5}]
```

With initial conditions:

```wolfram
StateResponse[{sys, {1, 0}}, 0, {t, 0, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StateResponse.html) for more details.*