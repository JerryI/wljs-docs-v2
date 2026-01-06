---
title: Function
---

`body &` or `Function[body]` is a pure (or "anonymous") function. The formal parameters are `#` (or `#1`), `#2`, etc.

`x |-> body` or `Function[x, body]` is a pure function with a single formal parameter x.

`{x1, x2, ...} |-> body` or `Function[{x1, x2, ...}, body]` is a pure function with a list of formal parameters.

## Examples

Create a pure function using &:

```wolfram
(#^2 &) /@ {1, 2, 3, 4}
(* {1, 4, 9, 16} *)
```

Using named parameters:

```wolfram
Function[{x, y}, x + y][3, 4]
(* 7 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Function.html) for more details.*