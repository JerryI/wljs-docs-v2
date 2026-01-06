---
title: ParticleAcceleratorData
---

`ParticleAcceleratorData[entity, property]` gives the value of the specified property for the particle accelerator entity.

`ParticleAcceleratorData[{entity1, entity2, ...}, property]` gives a list of property values for the specified particle accelerator entities.

`ParticleAcceleratorData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get information about the Large Hadron Collider:

```wolfram
ParticleAcceleratorData["LHC", "MaximumEnergy"]
```

List all particle accelerators:

```wolfram
ParticleAcceleratorData[]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParticleAcceleratorData.html) for more details.*