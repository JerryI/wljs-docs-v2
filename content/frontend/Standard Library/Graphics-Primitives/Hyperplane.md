---
title: Hyperplane
---

`Hyperplane[n, p]` represents a hyperplane with normal n passing through point p.

`Hyperplane[n, c]` represents a hyperplane where points x satisfy n·x = c.

## Examples

Define a plane in 3D:

```wolfram
Hyperplane[{0, 0, 1}, {0, 0, 0}]
```

Region membership:

```wolfram
RegionMember[Hyperplane[{1, 1}, 0], {1, -1}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Hyperplane.html) for more details.*