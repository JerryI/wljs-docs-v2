---
title: Shortest
---

`Shortest[p]` is a pattern object that matches the shortest sequence consistent with the pattern p.

## Examples

Match shortest sequence:

```wolfram
ReplaceList[{a, b, c, d}, {Shortest[x__], y__} -> {{x}, {y}}]
(* {{{a}, {b, c, d}}} *)
```

Compare with longest match:

```wolfram
Cases[{{a, b}, {a, b, c}, {a}}, {Shortest[__]}]
(* {{a}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Shortest.html) for more details.