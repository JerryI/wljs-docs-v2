---
title: Flat
---

`Flat` is an attribute that can be assigned to a symbol f to indicate that all expressions involving nested functions f should be flattened out. This property is accounted for in pattern matching.

## Examples

Define a flat function:

```wolfram
SetAttributes[f, Flat]
f[f[a, b], c]
(* f[a, b, c] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Flat.html) for more details.