---
title: DivisorSum
---

`DivisorSum[n,form]` represents the sum of form[i] for all i that divide n.

`DivisorSum[n,form,cond]` includes only those divisors for which cond[i] gives True.

## Examples

Sum the squares of divisors:

```wolfram
DivisorSum[12, #^2 &]
(* 210 *)
```

Sum only odd divisors:

```wolfram
DivisorSum[12, # &, OddQ]
(* 4 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DivisorSum.html) for more details.