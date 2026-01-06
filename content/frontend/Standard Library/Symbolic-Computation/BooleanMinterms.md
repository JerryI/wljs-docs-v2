---
title: BooleanMinterms
---

`BooleanMinterms[k, n]` represents the kth minterm in n variables.

`BooleanMinterms[{k1, k2, ...}, n]` represents the disjunction of the minterms ki.

`BooleanMinterms[spec, {a1, a2, ...}]` gives the Boolean expression in variables ai.

## Examples

A minterm:

```wolfram
BooleanMinterms[2, {a, b, c}]
(* !a && b && !c *)
```

Disjunction of minterms:

```wolfram
BooleanMinterms[{0, 3}, {a, b}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanMinterms.html) for more details.*