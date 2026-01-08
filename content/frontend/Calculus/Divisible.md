---
title: Divisible
---

`Divisible[n, m]` yields `True` if n is divisible by m, and `False` otherwise.

## Examples

Check divisibility:

```wolfram
Divisible[12, 4]
(* True *)
```

```wolfram
Divisible[13, 4]
(* False *)
```

Filter divisible numbers:

```wolfram
Select[Range[20], Divisible[#, 3] &]
(* {3, 6, 9, 12, 15, 18} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Divisible.html) for more details.