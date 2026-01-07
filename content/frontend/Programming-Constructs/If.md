---
title: If
---

`If[condition, t, f]` gives t if condition evaluates to True, and f if it evaluates to False.

`If[condition, t, f, u]` gives u if condition evaluates to neither True nor False.

## Examples

Simple conditional:

```wolfram
If[2 > 1, "yes", "no"]
(* "yes" *)
```

Conditional in a function:

```wolfram
f[x_] := If[x >= 0, Sqrt[x], "undefined"]
f[4]
(* 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/If.html) for more details.*