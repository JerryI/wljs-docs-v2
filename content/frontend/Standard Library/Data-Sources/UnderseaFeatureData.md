# UnderseaFeatureData

`UnderseaFeatureData[entity, property]` gives the value of the specified property for the undersea feature entity.

- `UnderseaFeatureData[{entity1, entity2, ...}, property]` gives a list of property values for the specified undersea feature entities.
- `UnderseaFeatureData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get depth of Mariana Trench:
```wolfram
UnderseaFeatureData[Entity["UnderseaFeature", "MarianaTrench"], "Depth"]
```

Query feature location:
```wolfram
UnderseaFeatureData[Entity["UnderseaFeature", "MidAtlanticRidge"], "Position"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnderseaFeatureData.html) for more details.*