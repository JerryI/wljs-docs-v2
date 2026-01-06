# WindVectorData

`WindVectorData[]` gives the most recent weather station measurement for wind vector near the current location.

- `WindVectorData[datespec]` gives the wind vector value for the specified time near the current location.
- `WindVectorData[locationspec]` gives the most recent measurement for wind vector near the specified location.
- `WindVectorData[locationspec, datespec]` gives the value or values for the specified date and location.
- `WindVectorData[{{location1, date1}, {location2, date2}, ...}]` gives values for all specified locations on the specified dates.

## Examples

```wolfram
WindVectorData[]
```

```wolfram
WindVectorData[Entity["City", {"NewYork", "NewYork", "UnitedStates"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WindVectorData.html) for more details.*