---
title: CycleIndexPolynomial
---

`CycleIndexPolynomial[perm, {x1, ..., xn}]` constructs the cycle index monomial of the permutation perm in the variables xi.

`CycleIndexPolynomial[group, {x1, ..., xn}]` constructs the cycle index polynomial of group in the variables xi.

## Examples

Cycle index of a permutation:

```wolfram
CycleIndexPolynomial[Cycles[{{1, 2, 3}}], {x1, x2, x3}]
(* x3 *)
```

For a symmetric group:

```wolfram
CycleIndexPolynomial[SymmetricGroup[3], {x1, x2, x3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CycleIndexPolynomial.html) for more details.