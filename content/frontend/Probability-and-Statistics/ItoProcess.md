---
title: ItoProcess
---

`ItoProcess[{a, b}, x, t]` represents an Ito process x(t), where dx(t) = a(t,x(t))dt + b(t,x(t))·dw(t).

`ItoProcess[{a, b, c}, x, t]` represents an Ito process y(t) = c(t,x(t)), where dx(t) = a(t,x(t))dt + b(t,x(t))·dw(t).

`ItoProcess[..., {x, x0}, {t, t0}]` uses initial condition x(t0) = x0.

`ItoProcess[..., ..., ..., Σ]` uses a Wiener process w(t), with covariance Σ.

`ItoProcess[proc]` converts proc to a standard Ito process whenever possible.

`ItoProcess[sdeqns, expr, x, t, w, dproc]` represents an Ito process specified by a stochastic differential equation sdeqns, output expression expr, with state x and time t, driven by w following the process dproc.

## Examples

Define a geometric Brownian motion:

```wolfram
proc = ItoProcess[{\[Mu] x[t], \[Sigma] x[t]}, x[t], {x, 1}, t]
```

Simulate the process:

```wolfram
RandomFunction[proc /. {\[Mu] -> 0.1, \[Sigma] -> 0.2}, {0, 1, 0.01}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ItoProcess.html) for more details.*