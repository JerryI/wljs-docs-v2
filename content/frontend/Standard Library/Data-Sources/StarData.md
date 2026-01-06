# StarData

`StarData[entity, property]` gives the value of the specified property for the star entity.

- `StarData[{entity1, entity2, ...}, property]` gives a list of property values for the specified star entities.
- `StarData[entity, property, annotation]` gives the specified annotation associated with the property.

## Examples

```wolfram
StarData["Sun", "SpectralType"]
```

```wolfram
StarData[Entity["Star", "Sirius"], "AbsoluteMagnitude"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StarData.html) for more details.*