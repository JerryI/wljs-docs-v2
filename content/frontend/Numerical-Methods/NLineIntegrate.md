---
title: NLineIntegrate
---

`NLineIntegrate[f, {x, y, ...} ∈ curve]` computes the numerical scalar line integral of the function f[x, y, ...] over the curve.

- `NLineIntegrate[{p, q, ...}, {x, y, ...} ∈ curve]` computes the numerical vector line integral of the vector function {p[x, y, ...], q[x, y, ...], ...}.

## Examples

```wolfram
NLineIntegrate[1, {x, y} ∈ Circle[]]
```

```wolfram
NLineIntegrate[x^2 + y^2, {x, y} ∈ Line[{{0, 0}, {1, 1}}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NLineIntegrate.html) for more details.*