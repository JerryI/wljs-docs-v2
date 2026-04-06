---
title: NightHemisphere
---

`NightHemisphere[]` is a two-dimensional GeoGraphics primitive that represents the half of the Earth currently in darkness.

`NightHemisphere[datespec]` represents the night half of the Earth for the specified date.

## Examples

Show the current night hemisphere:

```wolfram
GeoGraphics[{Gray, NightHemisphere[]}]
```

Show night hemisphere for a specific date:

```wolfram
GeoGraphics[{Gray, NightHemisphere[DateObject[{2024, 6, 21, 12, 0}]]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NightHemisphere.html) for more details.