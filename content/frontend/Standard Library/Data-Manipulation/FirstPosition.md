---
title: FirstPosition
---

`FirstPosition[expr, pattern]` gives the position of the first element matching pattern, or `Missing["NotFound"]` if none is found.

`FirstPosition[expr, pattern, default]` gives default if no match is found.

## Examples

Find first position:

```wolfram
FirstPosition[{1, 2, 3, 2}, 2]
(* {2} *)
```

In nested lists:

```wolfram
FirstPosition[{{a, b}, {c, d}}, d]
(* {2, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FirstPosition.html) for more details.*