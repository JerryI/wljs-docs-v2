---
title: MineralData
---

`MineralData[entity, property]` gives the value of the specified property for the mineral entity.

- `MineralData[{entity1, entity2, ...}, property]` gives a list of property values for the specified mineral entities.
- `MineralData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
MineralData["Quartz", "ChemicalFormula"]
```

```wolfram
MineralData["Diamond", "MohsHardness"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MineralData.html) for more details.*