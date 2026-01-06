# AnatomyData

`AnatomyData[entity, property]` gives the value of the specified property for the anatomical structure entity.

`AnatomyData[{entity1, entity2, ...}, property]` gives a list of property values for the specified anatomical structure entities.

## Examples

Get information about an anatomical structure:

```wolfram
AnatomyData[Entity["AnatomicalStructure", "Heart"], "Graphics3D"]
```

List available properties:

```wolfram
AnatomyData["Properties"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnatomyData.html) for more details.*