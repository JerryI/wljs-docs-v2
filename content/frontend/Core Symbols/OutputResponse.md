# OutputResponse

`OutputResponse[sys, u[t], {t, tmin, tmax}]` gives the numeric output response of systems model sys to the input u[t] for tmin ≤ t ≤ tmax.

- `OutputResponse[sys, {u[0], u[1], …}]` gives the output response of the discrete-time system sys to the input sequence u[i].
- `OutputResponse[sys, u[t], t]` gives the symbolic output response of system sys to the input u[t] as a function of time t.
- `OutputResponse[sys, {u1[t], …, um[t]}, …]` gives the output response for multiple inputs ui[t].

## Examples

```wolfram
sys = TransferFunctionModel[1/(s + 1), s];
OutputResponse[sys, UnitStep[t], {t, 0, 10}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OutputResponse.html) for more details.*