---
title: RegionHausdorffDistance
---

`RegionHausdorffDistance[reg1, reg2]` gives the Hausdorff distance between the regions reg1 and reg2.

## Examples

Hausdorff distance between two disks:

```wolfram
RegionHausdorffDistance[Disk[{0, 0}], Disk[{3, 0}]]
(* 3 *)
```

Distance between a square and a circle:

```wolfram
RegionHausdorffDistance[Rectangle[], Disk[{2, 2}]]
```

Distance between two polygons:

```wolfram
RegionHausdorffDistance[
  Triangle[{{0, 0}, {1, 0}, {0, 1}}],
  Triangle[{{2, 0}, {3, 0}, {2, 1}}]
]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionHausdorffDistance.html) for more details.