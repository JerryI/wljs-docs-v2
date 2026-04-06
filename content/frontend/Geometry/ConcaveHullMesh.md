---
title: ConcaveHullMesh
---

`ConcaveHullMesh[{p1, p2, ...}]` gives the concave hull mesh from the points p1, p2, ....

`ConcaveHullMesh[{p1, p2, ...}, α]` gives the concave hull mesh of the specified parameter α.

`ConcaveHullMesh[{p1, p2, ...}, α, d]` gives the concave hull mesh of cells of dimension d.

## Examples

Create a concave hull mesh from random points:

```wolfram
pts = RandomReal[1, {50, 2}];
ConcaveHullMesh[pts]
```

With a specified alpha parameter:

```wolfram
ConcaveHullMesh[pts, 0.1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConcaveHullMesh.html) for more details.