---
title: ReplaceAll
---

`expr /. rules` or `ReplaceAll[expr, rules]` applies a rule or list of rules in an attempt to transform each subpart of an expression expr.

## Examples

Replace all occurrences:

```wolfram
{a, b, a, c, a} /. a -> x
(* {x, b, x, c, x} *)
```

Replace with patterns:

```wolfram
{1, 2, 3, 4} /. x_?EvenQ -> x^2
(* {1, 4, 3, 16} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReplaceAll.html) for more details.*