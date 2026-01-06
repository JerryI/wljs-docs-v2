---
title: NumberCompose
---

`NumberCompose[{c1, ..., cn}, {u1, ..., un}]` returns the quantity c₁u₁ + ... + cₙuₙ.

## Examples

Compose a number from units:

```wolfram
NumberCompose[{3, 2, 5}, {100, 10, 1}]
(* 325 *)
```

Time composition:

```wolfram
NumberCompose[{2, 30, 45}, {3600, 60, 1}]
(* 9045 seconds *)
```

With unit objects:

```wolfram
NumberCompose[{5, 3}, {Quantity[1, "Meters"], Quantity[1, "Centimeters"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumberCompose.html) for more details.*