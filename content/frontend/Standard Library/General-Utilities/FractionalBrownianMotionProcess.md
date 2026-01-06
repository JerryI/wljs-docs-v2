# FractionalBrownianMotionProcess

`FractionalBrownianMotionProcess[μ, σ, h]` represents fractional Brownian motion process with drift μ, volatility σ, and Hurst index h.

- `FractionalBrownianMotionProcess[h]` represents fractional Brownian motion process with drift 0, volatility 1, and Hurst index h.

## Examples

Create a fractional Brownian motion with Hurst index 0.7:

```wolfram
proc = FractionalBrownianMotionProcess[0.7];
RandomFunction[proc, {0, 1, 0.01}]
```

Simulate multiple paths:

```wolfram
RandomFunction[FractionalBrownianMotionProcess[0, 1, 0.3], {0, 1, 0.01}, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FractionalBrownianMotionProcess.html) for more details.*