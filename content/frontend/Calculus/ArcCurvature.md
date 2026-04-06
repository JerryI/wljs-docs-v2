---
title: ArcCurvature
---

`ArcCurvature[{x1, ..., xn}, t]` gives the curvature of the parametrized curve whose Cartesian coordinates xi are functions of t.

`ArcCurvature[{x1, ..., xn}, t, chart]` interprets the xi as coordinates in the specified coordinate chart.

## Examples

Find the curvature of a circle:

```wolfram
ArcCurvature[{Cos[t], Sin[t]}, t]
(* 1 *)
```

Curvature of a helix:

```wolfram
ArcCurvature[{Cos[t], Sin[t], t}, t]
(* 1/2 *)
```

Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArcCurvature.html) for more details.