---
title: Rule
---

`lhs -> rhs` represents a rule that transforms lhs to rhs.

## Examples

Simple replacement rule:

```wolfram
x /. x -> 5
(* 5 *)
```

Multiple rules:

```wolfram
{a, b, c} /. {a -> 1, b -> 2}
(* {1, 2, c} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Rule.html) for more details.