---
title: NuclearExplosionData
---

`NuclearExplosionData[entity, property]` gives the value of the specified property for the nuclear explosion entity.

- `NuclearExplosionData[{entity1, entity2, ...}, property]` gives a list of property values for the specified nuclear explosion entities.
- `NuclearExplosionData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

```wolfram
NuclearExplosionData[]
```

```wolfram
NuclearExplosionData[Entity["NuclearExplosion", "TrinityTest"], "Yield"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NuclearExplosionData.html) for more details.*