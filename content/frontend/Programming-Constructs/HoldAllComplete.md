---
title: HoldAllComplete
---

`HoldAllComplete` is an attribute which specifies that all arguments to a function are not to be modified or looked at in any way during evaluation.

## Examples

Define function with HoldAllComplete:

```wolfram
SetAttributes[f, HoldAllComplete];
f[Sequence[1, 2, 3]]
(* f[Sequence[1, 2, 3]] *)
```

Compare with HoldAll:

```wolfram
SetAttributes[g, HoldAll];
g[Sequence[1, 2, 3]]
(* g[1, 2, 3] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HoldAllComplete.html) for more details.