---
title: InverseHankelTransform
---

`InverseHankelTransform[expr, s, r]` gives the inverse Hankel transform of order 0 for expr.

- `InverseHankelTransform[expr, s, r, ν]` gives the inverse Hankel transform of order ν for expr.

## Examples

Inverse Hankel transform of order 0:

```wolfram
InverseHankelTransform[1/(1 + s^2), s, r]
```

With a specific order:

```wolfram
InverseHankelTransform[s, s, r, 1]
```

Verify round-trip:

```wolfram
f = Exp[-r^2];
InverseHankelTransform[HankelTransform[f, r, s], s, r]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseHankelTransform.html) for more details.