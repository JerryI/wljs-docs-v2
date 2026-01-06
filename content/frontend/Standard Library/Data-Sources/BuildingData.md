---
title: BuildingData
---

`BuildingData[entity, property]` gives the value of the specified property for the building entity.

`BuildingData[{entity1, entity2, ...}, property]` gives a list of property values for the specified building entities.

## Examples

Get building information:

```wolfram
BuildingData[Entity["Building", "EmpireStateBuilding"], "Height"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BuildingData.html) for more details.*