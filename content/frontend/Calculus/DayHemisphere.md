---
title: DayHemisphere
---

`DayHemisphere[]` is a two-dimensional GeoGraphics primitive that represents the half of the Earth that is currently in daylight.

`DayHemisphere[datespec]` represents the daylight half of the Earth for the specified date.

## Examples

Show the current daylight hemisphere:

```wolfram
GeoGraphics[DayHemisphere[]]
```

Show daylight for a specific date:

```wolfram
GeoGraphics[DayHemisphere[DateObject[{2024, 6, 21}]]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DayHemisphere.html) for more details.