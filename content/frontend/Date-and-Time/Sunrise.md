---
title: Sunrise
---

`Sunrise[]` gives the time of the next sunrise for the current date and location.

- `Sunrise[datespec]` gives the times of the next sunrise for the specified dates.
- `Sunrise[locationspec]` gives the times of the next sunrise for the specified locations.
- `Sunrise[locationspec, datespec]` gives the time of the next sunrise for the specified date and location.
- `Sunrise[{{location1, date1}, {location2, date2}, ...}]` gives the times of the next sunrise for all specified locations on the specified dates.
- `Sunrise[locationspec, datespec, func]` uses func to determine what to return for extended locations.

## Examples

Next sunrise at current location:

```wolfram
Sunrise[]
```

Sunrise in a specific city:

```wolfram
Sunrise[Entity["City", {"NewYork", "NewYork", "UnitedStates"}]]
```

Sunrise on a specific date:

```wolfram
Sunrise[Here, DateObject[{2024, 6, 21}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sunrise.html) for more details.