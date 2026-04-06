---
title: FirstCase
---

`FirstCase[{e1, e2, ...}, pattern]` gives the first element matching pattern, or `Missing["NotFound"]` if none is found.

`FirstCase[expr, pattern, default]` gives default if no match is found.

## Examples

Find first match:

```wolfram
FirstCase[{1, "a", 2, "b"}, _String]
(* "a" *)
```

With default:

```wolfram
FirstCase[{1, 2, 3}, _String, "none"]
(* "none" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FirstCase.html) for more details.