# NeighborhoodData

`NeighborhoodData[entity, property]` gives the value of the specified property for the neighborhood entity.

- `NeighborhoodData[{entity1, entity2, …}, property]` gives a list of property values for the specified neighborhood entities.
- `NeighborhoodData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
NeighborhoodData[Entity["Neighborhood", {"SoHo", "NewYorkCity", "NewYork", "UnitedStates"}], "Population"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NeighborhoodData.html) for more details.*