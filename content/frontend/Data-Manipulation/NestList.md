---
title: NestList
---

`NestList[f, expr, n]` gives a list of the results of applying f to expr 0 through n times.

## Examples

Create a list of successive applications:

```wolfram
NestList[f, x, 3]
(* {x, f[x], f[f[x]], f[f[f[x]]]} *)
```

Practical example:

```wolfram
NestList[# + 1 &, 0, 5]
(* {0, 1, 2, 3, 4, 5} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NestList.html) for more details.