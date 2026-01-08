---
title: ExactNumberQ
---

`ExactNumberQ[expr]` returns `True` if expr is an exact real or complex number, and `False` otherwise.

## Examples

Test if a number is exact:

```wolfram
ExactNumberQ[3/7]
(* True *)
```

Approximate numbers return False:

```wolfram
ExactNumberQ[3.14]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExactNumberQ.html) for more details.