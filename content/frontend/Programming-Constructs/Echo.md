---
title: Echo
---

`Echo[expr]` prints expr and returns expr.

`Echo[expr, label]` prints expr with a label prefix.

`Echo[expr, label, f]` prints `f[expr]` with a label and returns expr.

## Examples

Print intermediate values:

```wolfram
Echo[2 + 2]
(* prints: 4 and returns 4 *)
```

With a label:

```wolfram
Echo[{1, 2, 3}, "value: "]
(* prints: value: {1, 2, 3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Echo.html) for more details.