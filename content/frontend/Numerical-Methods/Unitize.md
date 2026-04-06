---
title: Unitize
---

`Unitize[x]` gives 0 when x is zero, and 1 when x has any other numerical value.

## Examples

Unitize a number:

```wolfram
Unitize[5]
(* 1 *)
```

```wolfram
Unitize[0]
(* 0 *)
```

Apply to a list:

```wolfram
Unitize[{-3, 0, 2, 0, 5}]
(* {1, 0, 1, 0, 1} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Unitize.html) for more details.