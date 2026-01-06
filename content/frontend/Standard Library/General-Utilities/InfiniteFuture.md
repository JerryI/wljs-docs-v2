---
title: InfiniteFuture
---

`InfiniteFuture` returns a DateObject expression representing infinite future in time.

## Examples

Get the infinite future date:

```wolfram
InfiniteFuture
(* DateObject[{∞}] *)
```

Use in date comparisons:

```wolfram
DateWithin[Now, InfiniteFuture]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InfiniteFuture.html) for more details.*