---
title: Nand
---

`Nand[e1, e2, ...]` is the logical NAND function. It evaluates its arguments in order, giving `True` immediately if any of them are `False`, and `False` if they are all `True`.

## Examples

```wolfram
Nand[True, True]
(* False *)
```

```wolfram
Nand[True, False]
(* True *)
```

```wolfram
Nand[False, False]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Nand.html) for more details.