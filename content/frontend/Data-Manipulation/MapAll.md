---
title: MapAll
---

`MapAll[f, expr]` or `f //@ expr` applies f to every subexpression in expr.

## Examples

```wolfram
MapAll[f, {a, {b, c}}]
(* f[{f[a], f[{f[b], f[c]}]}] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MapAll.html) for more details.