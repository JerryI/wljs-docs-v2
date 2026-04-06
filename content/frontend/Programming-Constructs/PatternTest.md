---
title: PatternTest
---

`p?test` is a pattern object that stands for any expression that matches p, and on which the application of test gives `True`.

## Examples

Match only integers:

```wolfram
f[x_?IntegerQ] := x^2;
f[5]
(* 25 *)
```

Match only positive:

```wolfram
g[x_?Positive] := Sqrt[x];
g[4]
(* 2 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PatternTest.html) for more details.