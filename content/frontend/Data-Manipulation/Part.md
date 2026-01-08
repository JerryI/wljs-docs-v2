---
title: Part
---

`expr[[i]]` or `Part[expr, i]` gives the ith part of expr.

`expr[[-i]]` counts from the end.

`expr[[i, j, ...]]` or `Part[expr, i, j, ...]` is equivalent to `expr[[i]][[j]]...`.

`expr[[{i1, i2, ...}]]` gives a list of the parts i1, i2, ... of expr.

`expr[[m;;n]]` gives parts m through n.

## Examples

Get the second element:

```wolfram
{a, b, c, d}[[2]]
(* b *)
```

Get the last element:

```wolfram
{a, b, c, d}[[-1]]
(* d *)
```

Get multiple parts:

```wolfram
{a, b, c, d}[[{1, 3}]]
(* {a, c} *)
```

Slice a list:

```wolfram
{a, b, c, d, e}[[2;;4]]
(* {b, c, d} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Part.html) for more details.
