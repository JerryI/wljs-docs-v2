# Offload

`Offload[expr]` keeps expr from evaluation on the Kernel, deferring computation to the frontend.

This is useful for frontend-side dynamic computations and graphics.

## Examples

```wolfram
Offload[x + 1]
```

```wolfram
Graphics[{Offload[Point[{0, 0}]]}]
```

```wolfram
(* Defer computation to frontend *)
Dynamic[Offload[expensiveComputation[]]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Offload.html) for more details.*