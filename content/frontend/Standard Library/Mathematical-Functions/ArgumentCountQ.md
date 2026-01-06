---
title: ArgumentCountQ
---

`ArgumentCountQ[head, len, min, max]` tests whether the number len of arguments of a function head is between min and max.

`ArgumentCountQ[head, len, {m1, m2, ..., mi}]` tests whether the number len of arguments of a function head is one of the mi.

## Examples

Check if argument count is valid:

```wolfram
ArgumentCountQ[f, 3, 1, 5]
(* True *)
```

Check for specific counts:

```wolfram
ArgumentCountQ[g, 2, {1, 2, 4}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArgumentCountQ.html) for more details.*