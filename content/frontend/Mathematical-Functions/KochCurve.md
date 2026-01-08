---
title: KochCurve
---

`KochCurve[n]` gives the line segments representing the nth-step Koch curve.

- `KochCurve[n, {θ1, θ2, …}]` takes a series of steps of unit length at successive relative angles `θi`.
- `KochCurve[n, {{r1, θ1}, {r2, θ2}, …}]` takes successive steps of lengths proportional to `ri`.

## Examples

```wolfram
Graphics[KochCurve[4]]
```

```wolfram
Graphics[KochCurve[3, {60 Degree, -120 Degree, 60 Degree, 0}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KochCurve.html) for more details.