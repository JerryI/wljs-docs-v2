---
title: Options
---

`Options[symbol]` gives the list of default options for a function. `Options[expr]` extracts options from an expression.

## Examples

Inspect function options:

```wolfram
(* Default options for Plot *)
Options[Plot]
(* {AlignmentPoint -> Center, AspectRatio -> 1/GoldenRatio, ...} *)

(* Get specific option *)
Options[Plot, PlotRange]
(* {PlotRange -> {Full, Automatic}} *)

(* Options from a graphics object *)
g = Graphics[Circle[], Frame -> True]
Options[g, Frame]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Options.html) for more details.*