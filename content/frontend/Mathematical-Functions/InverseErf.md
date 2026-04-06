---
title: InverseErf
---

`InverseErf[s]` gives the inverse error function, solving for z in s = erf(z).

## Examples

Compute inverse:

```wolfram
InverseErf[0.5]
(* 0.476936 *)
```

Verify relationship:

```wolfram
Erf[InverseErf[0.8]]
(* 0.8 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseErf.html) for more details.