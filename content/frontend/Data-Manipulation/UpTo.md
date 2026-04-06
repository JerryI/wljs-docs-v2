---
title: UpTo
---

`UpTo[n]` is a symbolic specification that represents up to n objects or positions. If n objects or positions are available, all are used. If fewer are available, only those available are used.

## Examples

Take up to 5 elements:

```wolfram
Take[{1, 2, 3}, UpTo[5]]
(* {1, 2, 3} *)
```

Take up to 2 elements:

```wolfram
Take[{1, 2, 3, 4, 5}, UpTo[2]]
(* {1, 2} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UpTo.html) for more details.