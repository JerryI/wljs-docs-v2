# MinorPlanetData

`MinorPlanetData[entity, property]` gives the value of the specified property for the minor planet entity.

- `MinorPlanetData[{entity1, entity2, ...}, property]` gives a list of property values for the specified minor planet entities.
- `MinorPlanetData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get orbital period of Ceres:
```wolfram
MinorPlanetData[Entity["MinorPlanet", "Ceres"], "OrbitalPeriod"]
```

Query multiple asteroids:
```wolfram
MinorPlanetData[{Entity["MinorPlanet", "Ceres"], Entity["MinorPlanet", "Vesta"]}, "Mass"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinorPlanetData.html) for more details.*