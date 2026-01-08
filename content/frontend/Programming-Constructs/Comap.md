---
title: Comap
---

`Comap[{f1, f2, ...}, x]` gives {f1[x], f2[x], ...}.

`Comap[fs, x, levelspec]` applies parts of fs specified by levelspec to x.

`Comap[fs]` represents an operator form of Comap that can be applied to an expression.

## Examples

Apply multiple functions to one argument:

```wolfram
Comap[{Sin, Cos, Tan}, Pi/4]
(* {1/Sqrt[2], 1/Sqrt[2], 1} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Comap.html) for more details.