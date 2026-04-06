---
title: PiecewiseExpand
---

`PiecewiseExpand[expr]` expands nested piecewise functions in expr to give a single piecewise function.

- `PiecewiseExpand[expr, assum]` expands piecewise functions using assumptions.
- `PiecewiseExpand[expr, assum, dom]` does the expansion over the domain dom.

## Examples

Expand Abs:

```wolfram
PiecewiseExpand[Abs[x]]
(* Piecewise[{{-x, x < 0}}, x] *)
```

With assumptions:

```wolfram
PiecewiseExpand[Abs[x], x > 0]
(* x *)
```

Nested piecewise:

```wolfram
PiecewiseExpand[Max[x, Min[y, z]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PiecewiseExpand.html) for more details.