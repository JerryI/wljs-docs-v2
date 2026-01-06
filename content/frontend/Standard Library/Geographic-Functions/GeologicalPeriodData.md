# GeologicalPeriodData

`GeologicalPeriodData[entity, property]` gives the value of the specified property for the geological period entity.

- `GeologicalPeriodData[{entity1, entity2, …}, property]` gives a list of property values for the specified period name entities.
- `GeologicalPeriodData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
GeologicalPeriodData["Jurassic", "StartDate"]
```

```wolfram
GeologicalPeriodData["Cretaceous", "Duration"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeologicalPeriodData.html) for more details.*