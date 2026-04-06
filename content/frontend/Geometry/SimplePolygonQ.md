---
title: SimplePolygonQ
---

`SimplePolygonQ[poly]` gives `True` if the polygon poly is simple and `False` otherwise.

## Examples

```wolfram
SimplePolygonQ[Polygon[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}]]
(* True *)
```

```wolfram
SimplePolygonQ[Polygon[{{0, 0}, {1, 1}, {1, 0}, {0, 1}}]]
(* False, self-intersecting *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SimplePolygonQ.html) for more details.