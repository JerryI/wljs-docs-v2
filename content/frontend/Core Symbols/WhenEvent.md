# WhenEvent

`WhenEvent[event, action]` specifies an action that occurs when the event triggers it for equations in `NDSolve` and related functions.

## Examples

```wolfram
NDSolve[{y'[t] == y[t], y[0] == 1, WhenEvent[y[t] > 2, "StopIntegration"]}, y, {t, 0, 5}]
```

```wolfram
sol = NDSolve[{x''[t] == -x[t], x[0] == 1, x'[0] == 0, WhenEvent[x[t] == 0, x'[t] -> -0.9 x'[t]]}, x, {t, 0, 20}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WhenEvent.html) for more details.*