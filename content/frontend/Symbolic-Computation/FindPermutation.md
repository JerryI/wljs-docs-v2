---
title: FindPermutation
---

`FindPermutation[expr]` gives a permutation that produces expr by permuting `Sort[expr]`.

`FindPermutation[expr1, expr2]` gives a permutation that converts expr1 to expr2.

## Examples

Find permutation from sorted:

```wolfram
FindPermutation[{c, a, b}]
(* Cycles[{{1, 2, 3}}] *)
```

Permutation between lists:

```wolfram
FindPermutation[{a, b, c}, {c, a, b}]
(* Cycles[{{1, 3, 2}}] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindPermutation.html) for more details.