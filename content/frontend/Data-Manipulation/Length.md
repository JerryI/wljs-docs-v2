---
title: Length
---

`Length[expr]` gives the number of elements in expr.

## Examples

Get the length of a list:

```wolfram
Length[{a, b, c, d, e}]
(* 5 *)
```

Length of a string (use StringLength for characters):

```wolfram
Length["hello"]
(* 0 - strings have no parts at level 1 *)

StringLength["hello"]
(* 5 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Length.html) for more details.