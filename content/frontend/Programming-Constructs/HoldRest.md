---
title: HoldRest
---

`HoldRest` is an attribute which specifies that all but the first argument to a function are to be maintained in an unevaluated form.

## Examples

Set the HoldRest attribute on a function:

```wolfram
SetAttributes[f, HoldRest]
f[1 + 1, 2 + 2]
(* f[2, 2 + 2] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HoldRest.html) for more details.