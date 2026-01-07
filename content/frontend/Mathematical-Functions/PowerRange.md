---
title: PowerRange
---

`PowerRange[b]` generates the list {1, 10, 100, …, max}, where max is the largest power of 10 that does not exceed b.

`PowerRange[a, b]` generates the list {a, 10a, 100a, …, max}, with successive elements increasing by factors of 10.

`PowerRange[a, b, r]` uses factors of r instead of 10.

## Examples

Powers of 10:

```wolfram
PowerRange[1000]
(* {1, 10, 100, 1000} *)
```

Powers of 2:

```wolfram
PowerRange[1, 100, 2]
(* {1, 2, 4, 8, 16, 32, 64} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PowerRange.html) for more details.*