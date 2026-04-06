---
title: Drop
---

`Drop[list, n]` gives list with its first n elements dropped.

`Drop[list, -n]` gives list with its last n elements dropped.

`Drop[list, {m, n}]` gives list with elements m through n dropped.

## Examples

Drop the first 2 elements:

```wolfram
Drop[{a, b, c, d, e}, 2]
(* {c, d, e} *)
```

Drop the last element:

```wolfram
Drop[{a, b, c, d, e}, -1]
(* {a, b, c, d} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Drop.html) for more details.