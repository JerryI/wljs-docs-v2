---
title: Continue
---

`Continue[]` goes to the next iteration of the nearest enclosing `Do`, `For`, `While`, or `Until` loop.

## Examples

Skip even numbers:

```wolfram
Do[
  If[EvenQ[i], Continue[]];
  Print[i],
  {i, 1, 6}
]
(* prints 1, 3, 5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Continue.html) for more details.*