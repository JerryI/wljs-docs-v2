---
title: VolcanoData
---

`VolcanoData[entity, property]` gives the value of the specified property for the volcano entity.

`VolcanoData[{entity1, entity2, ...}, property]` gives a list of property values for the specified volcano entities.

`VolcanoData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get the elevation of Mount Fuji:

```wolfram
VolcanoData[Entity["Volcano", "Fuji"], "Elevation"]
```

Get the location of a volcano:

```wolfram
VolcanoData[Entity["Volcano", "Vesuvius"], "Position"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VolcanoData.html) for more details.*