---
title: KendallTauTest
---

`KendallTauTest[v1,v2]` tests whether the vectors v1 and v2 are independent.

`KendallTauTest[m1,m2]` tests whether the matrices m1 and m2 are independent.

`KendallTauTest[…,"property"]` returns the value of "property".

## Examples

Test independence of two vectors:

```wolfram
KendallTauTest[{1, 2, 3, 4}, {2, 4, 6, 8}]
(* 0.00833333 *)
```

Get the test statistic:

```wolfram
KendallTauTest[{1, 2, 3}, {3, 2, 1}, "TestStatistic"]
(* -1. *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KendallTauTest.html) for more details.