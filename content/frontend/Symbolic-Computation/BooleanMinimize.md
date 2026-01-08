---
title: BooleanMinimize
---

`BooleanMinimize[expr]` finds a minimal-length disjunctive normal form representation of expr.

`BooleanMinimize[expr,form]` finds a minimal-length representation for expr in the specified form.

`BooleanMinimize[expr,form,cond]` finds a minimal-length expression in the specified form that is equivalent to expr when cond is true.

## Examples

Minimize a Boolean expression:

```wolfram
BooleanMinimize[(a || b) && (a || c)]
(* a || (b && c) *)
```

Minimize to conjunctive normal form:

```wolfram
BooleanMinimize[a || (b && c), "CNF"]
(* (a || b) && (a || c) *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanMinimize.html) for more details.