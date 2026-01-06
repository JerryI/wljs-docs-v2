# PersonData

`PersonData[entity, property]` gives the value of the specified property for the person entity.

`PersonData[{entity1, entity2, ...}, property]` gives a list of property values for the specified person entities.

`PersonData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
PersonData["Albert Einstein", "BirthDate"]
```

```wolfram
PersonData[{"Einstein", "Newton"}, "BirthPlace"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PersonData.html) for more details.*