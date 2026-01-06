---
title: WindDirectionData
---

`WindDirectionData[]` gives the most recent measurement for wind direction near the current location.

- `WindDirectionData[datespec]` gives the wind direction value for the specified time near the current location.
- `WindDirectionData[locationspec]` gives the most recent measurement for wind direction near the specified location.
- `WindDirectionData[locationspec, datespec]` gives the value or values for the specified date and location.
- `WindDirectionData[{{location1, date1}, {location2, date2}, ...}]` gives values for all specified locations on the specified dates.

## Examples

Current wind direction:

```wolfram
WindDirectionData[]
```

At a specific location:

```wolfram
WindDirectionData[Entity["City", {"NewYork", "NewYork", "UnitedStates"}]]
```

Historical wind direction:

```wolfram
WindDirectionData[Here, DateObject[{2023, 1, 15}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WindDirectionData.html) for more details.*