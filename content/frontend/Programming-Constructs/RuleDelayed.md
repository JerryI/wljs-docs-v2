---
title: RuleDelayed
---

`lhs :> rhs` represents a rule that transforms lhs to rhs, evaluating rhs only after the rule is used.

## Examples

Use RuleDelayed to delay evaluation:

```wolfram
{x, x, x} /. x :> RandomReal[]
(* {0.234, 0.891, 0.456} *)
```

Compare with Rule (immediate evaluation):

```wolfram
{x, x, x} /. x -> RandomReal[]
(* {0.789, 0.789, 0.789} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RuleDelayed.html) for more details.