---
title: RegionConvert
---

`RegionConvert[reg, form]` converts the region representation reg to the specified form.

## Examples

Convert to mesh region:

```wolfram
RegionConvert[Disk[], MeshRegion]
```

Convert to boundary mesh:

```wolfram
RegionConvert[Ball[], BoundaryMeshRegion]
```

Convert to implicit form:

```wolfram
RegionConvert[Rectangle[], ImplicitRegion]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionConvert.html) for more details.