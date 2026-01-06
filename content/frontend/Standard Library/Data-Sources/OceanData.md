---
title: OceanData
---

`OceanData[entity,property]` gives the value of the specified property for the ocean entity.

`OceanData[{entity1,entity2,…},property]` gives a list of property values for the specified ocean entities.

`OceanData[entity,property,annotation]` gives the specified annotation associated with the given property.

## Examples

Get the area of the Pacific Ocean:

```wolfram
OceanData[Entity["Ocean", "PacificOcean"], "Area"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OceanData.html) for more details.*