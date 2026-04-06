---
title: CoplanarPoints
---

`CoplanarPoints[{p1,p2,p3,p4,…,pn}]` tests whether the points p1,p2,p3,p4,…,pn are coplanar.

## Examples

Test if four points are coplanar:

```wolfram
CoplanarPoints[{{0, 0, 0}, {1, 0, 0}, {0, 1, 0}, {1, 1, 0}}]
(* True *)
```

Non-coplanar points:

```wolfram
CoplanarPoints[{{0, 0, 0}, {1, 0, 0}, {0, 1, 0}, {0, 0, 1}}]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoplanarPoints.html) for more details.