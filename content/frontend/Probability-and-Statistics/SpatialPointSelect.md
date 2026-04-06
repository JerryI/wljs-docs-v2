---
title: SpatialPointSelect
---

`SpatialPointSelect[spdata, crit]` selects a subset of the `SpatialPointData` *spdata* according to *crit*.

## Examples

```wolfram
pts = SpatialPointData[RandomPoint[Disk[], 100]];
SpatialPointSelect[pts, RegionMember[Rectangle[]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialPointSelect.html) for more details.