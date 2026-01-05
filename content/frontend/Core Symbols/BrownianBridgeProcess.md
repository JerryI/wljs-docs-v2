# BrownianBridgeProcess

`BrownianBridgeProcess[σ, {t1, a}, {t2, b}]` represents the Brownian bridge process from value a at time t1 to value b at time t2 with volatility σ.

`BrownianBridgeProcess[{t1, a}, {t2, b}]` represents the standard Brownian bridge process from value a at time t1 to value b at time t2.

`BrownianBridgeProcess[t1, t2]` represents the standard Brownian bridge process pinned at 0 at times t1 and t2.

`BrownianBridgeProcess[]` represents the standard Brownian bridge process pinned at 0 at time 0 and at time 1.

## Examples

Create a standard Brownian bridge:

```wolfram
RandomFunction[BrownianBridgeProcess[], {0, 1, 0.01}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BrownianBridgeProcess.html) for more details.*