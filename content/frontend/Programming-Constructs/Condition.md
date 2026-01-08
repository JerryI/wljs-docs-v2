---
title: Condition
---

`patt /; test` is a pattern which matches only if the evaluation of test yields True.

`lhs :> rhs /; test` represents a rule which applies only if the evaluation of test yields True.

`lhs := rhs /; test` is a definition to be used only if test yields True.

## Examples

Pattern matching with a condition:

```wolfram
Cases[{1, -2, 3, -4, 5}, x_ /; x > 0]
(* {1, 3, 5} *)
```

Conditional replacement rule:

```wolfram
{1, -2, 3, -4} /. x_ :> x^2 /; x < 0
(* {1, 4, 3, 16} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Condition.html) for more details.