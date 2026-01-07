---
title: HalfSpace
---

`HalfSpace[n, p]` represents the half-space of points x such that n.(x-p)≤0.

`HalfSpace[n, c]` represents the half-space of points x such that n.x≤c.

## Examples

Define a half-space:

```wolfram
hs = HalfSpace[{0, 0, 1}, {0, 0, 0}]
(* HalfSpace[{0, 0, 1}, {0, 0, 0}] *)
```

Visualize a half-space:

```wolfram
RegionPlot3D[HalfSpace[{1, 1, 1}, 1], {x, -2, 2}, {y, -2, 2}, {z, -2, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HalfSpace.html) for more details.*