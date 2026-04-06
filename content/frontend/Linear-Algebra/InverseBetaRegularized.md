---
title: InverseBetaRegularized
---

`InverseBetaRegularized[s, a, b]` gives the inverse of the regularized incomplete beta function.

## Examples

Compute inverse:

```wolfram
InverseBetaRegularized[0.5, 2, 3]
(* 0.385728 *)
```

Verify relationship:

```wolfram
BetaRegularized[InverseBetaRegularized[0.5, 2, 3], 2, 3]
(* 0.5 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseBetaRegularized.html) for more details.