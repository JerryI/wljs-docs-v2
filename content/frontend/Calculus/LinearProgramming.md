---
title: LinearProgramming
---

`LinearProgramming[c, m, b]` finds a vector x that minimizes the quantity c.x subject to the constraints m.x ≥ b and x ≥ 0.

`LinearProgramming[c, m, {{b1, s1}, {b2, s2}, ...}]` finds x that minimizes c.x subject to constraints where s_i = 1 means ≥, s_i = 0 means =, and s_i = -1 means ≤.

## Examples

Simple linear program:

```wolfram
LinearProgramming[{1, 1}, {{1, 0}, {0, 1}}, {2, 3}]
(* {2, 3} *)
```

With equality constraint:

```wolfram
LinearProgramming[{-1, -1}, {{1, 1}}, {{5, 0}}]
(* {5, 0} or equivalent *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearProgramming.html) for more details.