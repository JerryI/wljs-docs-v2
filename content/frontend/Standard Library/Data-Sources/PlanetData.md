# PlanetData

`PlanetData[entity, property]` gives the value of the specified property for the planet entity.

- `PlanetData[{entity1, entity2, ...}, property]` gives a list of property values for multiple planet entities.
- `PlanetData[entity, property, annotation]` gives the specified annotation associated with the property.

## Examples

```wolfram
PlanetData["Mars", "Mass"]
```

```wolfram
PlanetData["Jupiter", {"Radius", "OrbitalPeriod"}]
```

```wolfram
PlanetData[{"Earth", "Venus"}, "SurfaceGravity"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlanetData.html) for more details.*