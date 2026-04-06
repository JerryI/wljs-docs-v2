---
title: GeometricBrownianMotionProcess
---

`GeometricBrownianMotionProcess[μ, σ, x0]` represents a geometric Brownian motion process with drift μ, volatility σ, and initial value x0.

## Examples

Define a geometric Brownian motion process:

```wolfram
proc = GeometricBrownianMotionProcess[0.1, 0.2, 100]
```

Simulate a sample path:

```wolfram
RandomFunction[proc, {0, 1, 0.01}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeometricBrownianMotionProcess.html) for more details.