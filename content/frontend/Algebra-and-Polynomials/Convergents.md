---
title: Convergents
---

`Convergents[list]` gives a list of the convergents corresponding to the continued fraction terms list.

`Convergents[x, n]` gives the first n convergents for a number x.

`Convergents[x]` gives if possible all convergents leading to the number x.

## Examples

Convergents from continued fraction terms:

```wolfram
Convergents[{3, 7, 15, 1, 292}]
(* {3, 22/7, 333/106, 355/113, 103993/33102} *)
```

Convergents of Pi:

```wolfram
Convergents[Pi, 5]
(* {3, 22/7, 333/106, 355/113, 103993/33102} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Convergents.html) for more details.