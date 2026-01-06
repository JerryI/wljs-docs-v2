# SpeciesData

`SpeciesData[name, property]` gives the value of the specified property for the species entity.

- `SpeciesData[{entity1, entity2, ...}, property]` gives a list of property values for the specified species entities.
- `SpeciesData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
SpeciesData["HomoSapiens", "ScientificName"]
```

```wolfram
SpeciesData[Entity["Species", "LionPanthera"], "CommonName"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpeciesData.html) for more details.*