---
title: DeleteCases
---

`DeleteCases[expr, pattern]` removes all elements of expr that match pattern.

## Examples

Remove specific elements:

```wolfram
DeleteCases[{1, a, 2, b, 3}, _Symbol]
(* {1, 2, 3} *)
```

Remove by value:

```wolfram
DeleteCases[{1, 2, 3, 2, 1}, 2]
(* {1, 3, 1} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteCases.html) for more details.