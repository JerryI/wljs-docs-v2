---
title: Inactivate
---

`Inactivate[expr]` replaces all instances of *f* with `Inactive[f]` for symbols *f* used as heads in *expr*.

- `Inactivate[expr, patt]` inactivates all symbols in *expr* that match the pattern *patt*.

## Examples

```wolfram
Inactivate[1 + 2 + 3]
(* Inactive[Plus][1, 2, 3] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Inactivate.html) for more details.