---
title: StratonovichProcess
---

`StratonovichProcess[{a, b}, x, t]` represents a Stratonovich process x(t), where dx(t) = a(t,x(t))dt + b(t,x(t)) ∘ dw(t).

- `StratonovichProcess[{a, b, c}, x, t]` represents a Stratonovich process y(t) = c(t,x(t)).
- `StratonovichProcess[..., ..., {x, x0}, {t, t0}]` represents a Stratonovich process with initial condition x(t0) = x0.
- `StratonovichProcess[..., ..., ..., Σ]` uses a Wiener process w(t) with covariance Σ.
- `StratonovichProcess[proc]` converts proc to a standard Stratonovich process whenever possible.
- `StratonovichProcess[sdeqns, expr, x, t, w, dproc]` represents a Stratonovich process specified by a stochastic differential equation sdeqns.

Stratonovich processes use a different stochastic calculus convention than Itô processes.

## Examples

```wolfram
StratonovichProcess[{x[t], 1}, x[t], t]
```

```wolfram
proc = StratonovichProcess[{-x[t], x[t]}, x[t], t];
RandomFunction[proc, {0, 1, 0.01}]
```

```wolfram
StratonovichProcess[{0, x[t]}, x[t], t, {x, 1}, {t, 0}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StratonovichProcess.html) for more details.*