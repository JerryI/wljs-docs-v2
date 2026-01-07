---
title: SeedRandom
---

`SeedRandom[s]` resets the pseudorandom generator using s as a seed.

`SeedRandom[]` resets using the time of day and session attributes.

## Examples

Set a fixed seed for reproducibility:

```wolfram
SeedRandom[42];
RandomReal[]
(* 0.370286... *)
```

Same seed gives same results:

```wolfram
SeedRandom[42];
RandomInteger[100]
(* 37 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SeedRandom.html) for more details.*