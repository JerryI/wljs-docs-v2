---
title: Names
---

`Names["pattern"]` gives a list of the names of symbols that match the pattern.

## Examples

Find all symbols starting with "Plot":

```wolfram
Names["Plot*"]
(* {"Plot", "Plot3D", "PlotRange", ...} *)
```

List all user-defined symbols:

```wolfram
Names["Global`*"]
(* {"x", "f", "myVar", ...} *)
```

Find symbols matching a pattern:

```wolfram
Names["*Q"]
(* {"EvenQ", "OddQ", "IntegerQ", ...} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Names.html) for more details.