---
title: RadonTransform
---

`RadonTransform[expr, {x, y}, {p, ϕ}]` gives the Radon transform of expr.

## Examples

Compute a Radon transform:
```wolfram
RadonTransform[Exp[-x^2 - y^2], {x, y}, {p, phi}]
```

Transform a rectangle function:
```wolfram
RadonTransform[Boole[Abs[x] < 1 && Abs[y] < 1], {x, y}, {p, phi}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RadonTransform.html) for more details.