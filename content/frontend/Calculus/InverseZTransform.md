---
title: InverseZTransform
---

`InverseZTransform[expr, z, n]` gives the inverse Z transform of expr.

## Examples

Inverse Z transform:

```wolfram
InverseZTransform[z/(z - a), z, n]
(* a^n *)
```

Round-trip:

```wolfram
InverseZTransform[ZTransform[f[n], n, z], z, n]
(* f[n] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseZTransform.html) for more details.