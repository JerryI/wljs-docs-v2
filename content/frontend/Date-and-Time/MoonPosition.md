---
title: MoonPosition
---

`MoonPosition[]` gives the position of the Moon for the current date and location.

- `MoonPosition[datespec]` gives the position of the Moon for the specified date.
- `MoonPosition[locationspec]` gives the position of the Moon for the specified location.
- `MoonPosition[locationspec, datespec]` gives the position of the Moon for the specified date and location.
- `MoonPosition[{{location1, date1}, {location2, date2}, ...}]` gives the positions of the Moon for all specified locations on the specified dates.
- `MoonPosition[locationspec, datespec, func]` uses func to determine what to return for extended locations.

## Examples

```wolfram
MoonPosition[]
```

```wolfram
MoonPosition[DateObject[{2024, 1, 15}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoonPosition.html) for more details.*