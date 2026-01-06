---
title: FilledCurve
---

`FilledCurve[{segment1,segment2,…}]` represents a filled curve consisting of segment1 followed by segment2 etc. 

`FilledCurve[{component1,component2,…}]` represents a list of separate filled component curves component1, component2, etc. 

## Examples

```wolfram
(* Create a simple filled curve *)
Graphics[FilledCurve[{
  Line[{{0, 0}, {1, 1}, {2, 0}}]
}]]

(* Create a filled curve with Bezier segments *)
Graphics[FilledCurve[{
  BezierCurve[{{0, 0}, {1, 2}, {2, 0}}],
  Line[{{2, 0}, {0, 0}}]
}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FilledCurve.html) for more details.*