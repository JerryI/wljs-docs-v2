---
title: DayNightTerminator
---

`DayNightTerminator[]` is a one-dimensional GeoGraphics primitive that represents the separation line between the halves of the Earth currently in daytime and nighttime.

`DayNightTerminator[datespec]` represents the separation line between day and night for the specified date.

## Examples

Show the day/night boundary:

```wolfram
GeoGraphics[{Red, DayNightTerminator[]}]
```

For a specific date:

```wolfram
GeoGraphics[DayNightTerminator[DateObject[{2024, 6, 21}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DayNightTerminator.html) for more details.*