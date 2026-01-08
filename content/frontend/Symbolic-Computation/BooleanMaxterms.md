---
title: BooleanMaxterms
---

`BooleanMaxterms[k, n]` represents the kth maxterm in n variables.

`BooleanMaxterms[{k1, k2, ...}, n]` represents the conjunction of the maxterms ki.

`BooleanMaxterms[spec, {a1, a2, ...}]` gives the Boolean expression in variables ai.

## Examples

A maxterm:

```wolfram
BooleanMaxterms[2, {a, b, c}]
(* a || !b || c *)
```

Conjunction of maxterms:

```wolfram
BooleanMaxterms[{0, 3}, {a, b}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanMaxterms.html) for more details.