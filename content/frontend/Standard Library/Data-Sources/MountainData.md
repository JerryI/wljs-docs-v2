---
title: MountainData
---

`MountainData[entity,property]` gives the value of the specified property for the mountain entity.

`MountainData[{entity1,entity2,…},property]` gives a list of property values for the specified mountain entities.

`MountainData[entity,property,annotation]` gives the specified annotation associated with the given property.

## Examples

Get the elevation of Mount Everest:

```wolfram
MountainData["MountEverest", "Elevation"]
```

Get the location of a mountain:

```wolfram
MountainData["K2", "Coordinates"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MountainData.html) for more details.*