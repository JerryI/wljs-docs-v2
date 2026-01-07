---
title: RecurrenceTable
---

`RecurrenceTable[eqns, expr, {n, nmax}]` generates a list of values of expr for successive n based on solving the recurrence equations eqns.

`RecurrenceTable[eqns, expr, nspec]` generates a list of values of expr over the range of n values specified by nspec.

`RecurrenceTable[eqns, expr, {n1, ...}, {n2, ...}, ...]` generates an array of values of expr for successive n1, n2, ... .

## Examples

Generate the first 10 Fibonacci numbers:

```wolfram
RecurrenceTable[{a[n] == a[n - 1] + a[n - 2], a[1] == 1, a[2] == 1}, a[n], {n, 1, 10}]
(* {1, 1, 2, 3, 5, 8, 13, 21, 34, 55} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RecurrenceTable.html) for more details.*