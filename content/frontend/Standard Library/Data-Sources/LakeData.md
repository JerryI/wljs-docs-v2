---
title: LakeData
---

`LakeData[entity, property]` gives the value of the specified property for the lake entity.

- `LakeData[{entity1, entity2, ...}, property]` gives a list of property values for the specified lake entities.
- `LakeData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
LakeData[Entity["Lake", "LakeSuperior::5f2qk"], "SurfaceArea"]
```

```wolfram
LakeData[Entity["Lake", "LakeTahoe::v9c82"], "MaxDepth"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LakeData.html) for more details.*