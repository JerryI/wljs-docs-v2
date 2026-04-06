---
title: Count
---

`Count[list, pattern]` gives the number of elements in list that match pattern.

## Examples

Count occurrences:

```wolfram
Count[{a, b, a, c, a}, a]
(* 3 *)
```

With patterns:

```wolfram
Count[{1, 2, "a", 3, "b"}, _Integer]
(* 3 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Count.html) for more details.