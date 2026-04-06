---
title: ChineseRemainder
---

`ChineseRemainder[{r1, r2, ...}, {m1, m2, ...}]` gives the smallest non-negative x that satisfies all the integer congruences x ≡ ri (mod mi).

`ChineseRemainder[{r1, r2, ...}, {m1, m2, ...}, d]` gives the smallest x ≥ d that satisfies all congruences.

## Examples

Solve a system of congruences:

```wolfram
ChineseRemainder[{2, 3, 2}, {3, 5, 7}]
(* 23 *)
```

Verify the result:

```wolfram
Mod[23, {3, 5, 7}]
(* {2, 3, 2} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChineseRemainder.html) for more details.