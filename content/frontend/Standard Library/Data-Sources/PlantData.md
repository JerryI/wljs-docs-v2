# PlantData

`PlantData[entity, property]` gives the value of the specified property for the plant entity.

- `PlantData[{entity1, entity2, ...}, property]` gives a list of property values for multiple plant entities.
- `PlantData[entity, property, annotation]` gives the specified annotation associated with the property.

## Examples

```wolfram
PlantData["Rose", "ScientificName"]
```

```wolfram
PlantData["Oak", {"Family", "Height"}]
```

```wolfram
PlantData[{"Tulip", "Sunflower"}, "FlowerColor"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlantData.html) for more details.*