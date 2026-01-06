# ParkData

`ParkData[entity, property]` gives the value of the specified property for the park entity.

- `ParkData[{entity1, entity2, ...}, property]` gives a list of property values for the specified park entities.
- `ParkData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
ParkData[Entity["Park", "YellowstoneNationalPark::9w2x3"], "Area"]
```

```wolfram
ParkData[Entity["Park", "YosemiteNationalPark::5xvgz"], "Location"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParkData.html) for more details.*