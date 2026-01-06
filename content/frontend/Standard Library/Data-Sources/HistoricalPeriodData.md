# HistoricalPeriodData

`HistoricalPeriodData[entity, property]` gives the value of the specified property for the historical period entity.

- `HistoricalPeriodData[{entity1, entity2, ...}, property]` gives a list of property values for the specified historical period entities.
- `HistoricalPeriodData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get information about the Renaissance:
```wolfram
HistoricalPeriodData[Entity["HistoricalPeriod", "Renaissance"], "StartDate"]
```

Query multiple periods:
```wolfram
HistoricalPeriodData[{Entity["HistoricalPeriod", "Renaissance"], 
  Entity["HistoricalPeriod", "MiddleAges"]}, "Duration"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HistoricalPeriodData.html) for more details.*