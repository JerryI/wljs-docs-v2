---
title: InverseGammaRegularized
---

`InverseGammaRegularized[a, s]` gives the inverse of the regularized incomplete gamma function.

## Examples

Compute inverse:

```wolfram
InverseGammaRegularized[2, 0.5]
(* 1.67835 *)
```

Verify relationship:

```wolfram
GammaRegularized[2, InverseGammaRegularized[2, 0.5]]
(* 0.5 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseGammaRegularized.html) for more details.