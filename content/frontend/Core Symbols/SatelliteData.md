# SatelliteData

`SatelliteData[entity, property]` gives the value of the specified property for the satellite entity.

- `SatelliteData[{entity1, entity2, ...}, property]` gives a list of property values for the specified satellite entities.
- `SatelliteData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
SatelliteData["ISS", "OrbitPeriod"]
```

```wolfram
SatelliteData[Entity["Satellite", "ISS"], "Altitude"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SatelliteData.html) for more details.*