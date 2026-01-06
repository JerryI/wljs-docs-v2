---
title: MixedFractionParts
---

`MixedFractionParts[expr]` gives the list `{IntegerPart[expr], FractionalPart[expr]}`.

## Examples

Get the integer and fractional parts of a number:

```wolfram
MixedFractionParts[7/3]
(* {2, 1/3} *)
```

Works with negative numbers:

```wolfram
MixedFractionParts[-7/3]
(* {-3, 2/3} *)
```

With real numbers:

```wolfram
MixedFractionParts[3.75]
(* {3, 0.75} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MixedFractionParts.html) for more details.*