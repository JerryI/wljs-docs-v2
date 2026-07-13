---
title: GeoOrientationData
---

`GeoOrientationData[date,prop]` gives the value of the property prop about the orientation of the Earth on the given date.

`GeoOrientationData[date,prop,"variant"]` gives the specified variant of the property prop on the given date.

## Examples

Get the polar motion on a specific date:

```wolfram
GeoOrientationData[DateObject[{2024, 1, 1}], "PolarMotion"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoOrientationData.html) for more details.
