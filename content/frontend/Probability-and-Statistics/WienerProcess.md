---
title: WienerProcess
---

`WienerProcess[μ, σ]` represents a Wiener process with a drift μ and volatility σ.

- `WienerProcess[]` represents a standard Wiener process with drift 0 and volatility 1.

## Examples

```wolfram
proc = WienerProcess[]
```

```wolfram
RandomFunction[WienerProcess[], {0, 1, 0.01}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WienerProcess.html) for more details.*