# NebulaData

`NebulaData[entity, property]` gives the value of the specified property for the nebula entity.

- `NebulaData[{entity1, entity2, ...}, property]` gives a list of property values for the specified nebula entities.
- `NebulaData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get nebula distance:

```wolfram
NebulaData[Entity["Nebula", "OrionNebula"], "Distance"]
```

Multiple properties:

```wolfram
NebulaData[Entity["Nebula", "CrabNebula"], {"Distance", "Constellation"}]
```

List all nebulae:

```wolfram
NebulaData[EntityClass["Nebula", "PlanetaryNebula"], "Name"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NebulaData.html) for more details.*