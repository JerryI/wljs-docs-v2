---
title: Complement
---

`Complement[eall, e1, e2, ...]` gives the elements in eall that are not in any of the ei.

## Examples

Find elements not in another list:

```wolfram
Complement[{a, b, c, d, e}, {b, d}]
(* {a, c, e} *)
```

Multiple lists:

```wolfram
Complement[{1, 2, 3, 4, 5}, {2, 4}, {3}]
(* {1, 5} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Complement.html) for more details.