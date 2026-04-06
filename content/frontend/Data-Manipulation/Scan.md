---
title: Scan
---

`Scan[f, expr]` evaluates f applied to each element of expr in turn (for side effects).

`Scan[f, expr, levelspec]` applies f to parts at specified levels.

## Examples

Print each element:

```wolfram
Scan[Print, {a, b, c}]
(* prints: a, b, c *)
```

Accumulate values with side effects:

```wolfram
total = 0;
Scan[(total += #) &, {1, 2, 3, 4}];
total
(* 10 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Scan.html) for more details.