---
title: DamData
---

`DamData[entity, property]` gives the value of the specified property for the dam entity.

`DamData[{entity1, entity2, ...}, property]` gives a list of property values for the specified dam entities.

`DamData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get data about a dam:

```wolfram
DamData[Entity["Dam", "HooverDam"], "Height"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DamData.html) for more details.*