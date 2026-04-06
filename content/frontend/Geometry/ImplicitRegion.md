---
title: ImplicitRegion
---

`ImplicitRegion[cond, {x1, ..., xn}]` represents a region that satisfies the conditions cond.

## Examples

Unit disk:

```wolfram
reg = ImplicitRegion[x^2 + y^2 <= 1, {x, y}];
RegionPlot[reg]
```

3D sphere:

```wolfram
ImplicitRegion[x^2 + y^2 + z^2 <= 1, {x, y, z}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImplicitRegion.html) for more details.