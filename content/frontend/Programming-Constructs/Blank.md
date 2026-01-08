---
title: Blank
---

`_` or `Blank[]` is a pattern object that can stand for any expression.

`_h` or `Blank[h]` can stand for any expression with head h.

## Examples

Match any expression:

```wolfram
MatchQ[5, _]
(* True *)
```

Match specific head:

```wolfram
MatchQ[5, _Integer]
(* True *)

MatchQ[5.0, _Integer]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Blank.html) for more details.