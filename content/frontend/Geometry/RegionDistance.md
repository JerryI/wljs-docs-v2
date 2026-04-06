---
title: RegionDistance
---

`RegionDistance[reg, p]` gives the minimum distance from point p to the region.

## Examples

Distance to a disk:

```wolfram
RegionDistance[Disk[{0, 0}, 1], {2, 0}]
(* 1 *)
```

Distance between regions:

```wolfram
RegionDistance[Disk[{0, 0}, 1], Disk[{3, 0}, 1]]
(* 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionDistance.html) for more details.