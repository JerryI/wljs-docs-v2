---
title: Sequence
---

`Sequence[expr1, expr2, ...]` represents a sequence of arguments to be spliced automatically into any function.

## Examples

Splice arguments into a function:

```wolfram
f[Sequence[a, b, c]]
(* f[a, b, c] *)
```

Use in list construction:

```wolfram
{1, Sequence[2, 3], 4}
(* {1, 2, 3, 4} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sequence.html) for more details.*