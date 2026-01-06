---
title: MultiplySides
---

`MultiplySides[rel, x]` multiplies each side of the equation or inequality rel by x.

- `MultiplySides[rel1, rel2]` multiplies the corresponding sides of two equations or inequalities.

## Examples

Multiply both sides of equation:

```wolfram
MultiplySides[a == b, 2]
(* 2 a == 2 b *)
```

Multiply inequality:

```wolfram
MultiplySides[x > 3, 4]
(* 4 x > 12 *)
```

Multiply two equations:

```wolfram
MultiplySides[a == b, c == d]
(* a c == b d *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MultiplySides.html) for more details.*