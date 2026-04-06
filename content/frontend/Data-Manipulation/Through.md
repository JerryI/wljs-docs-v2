---
title: Through
---

`Through[p[f, g, ...][x, y, ...]]` gives `p[f[x, y, ...], g[x, y, ...], ...]`.

## Examples

Apply multiple functions to the same argument:

```wolfram
Through[{f, g, h}[x]]
(* {f[x], g[x], h[x]} *)
```

Apply Min and Max together:

```wolfram
Through[{Min, Max}[{1, 5, 3, 2}]]
(* {1, 5} *)
```

With boolean operations:

```wolfram
Through[And[EvenQ, Positive][4]]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Through.html) for more details.