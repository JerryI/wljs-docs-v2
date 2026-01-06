---
title: DerivativePDETerm
---

`DerivativePDETerm[vars, γ]` represents a load derivative term ∇{x1,...,xn}·(γ) with load derivative coefficient γ and model variables vars.

`DerivativePDETerm[vars, γ, pars]` uses model parameters pars.

## Examples

Create a derivative PDE term:

```wolfram
DerivativePDETerm[{x, y}, f[x, y]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DerivativePDETerm.html) for more details.*