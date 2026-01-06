---
title: WindSpeedData
---

`WindSpeedData[]` gives the most recent measurement for wind speed near the current location.

- `WindSpeedData[datespec]` gives the wind speed value for the specified time near the current location.
- `WindSpeedData[locationspec]` gives the most recent measurement for wind speed near the specified location.
- `WindSpeedData[locationspec, datespec]` gives the value or values for the specified date and location.
- `WindSpeedData[{{location1, date1}, {location2, date2}, ...}]` gives values for all specified locations on the specified dates.

## Examples

```wolfram
WindSpeedData[]
```

```wolfram
WindSpeedData[Entity["City", {"NewYork", "NewYork", "UnitedStates"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WindSpeedData.html) for more details.*