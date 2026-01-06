---
title: NuclearReactorData
---

`NuclearReactorData[entity, property]` gives the value of the specified property for the nuclear reactor entity.

- `NuclearReactorData[{entity1, entity2, ...}, property]` gives a list of property values for the specified nuclear reactor entities.
- `NuclearReactorData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get reactor power:

```wolfram
NuclearReactorData[Entity["NuclearReactor", "DiabloCanyon1"], "ThermalPower"]
```

List available properties:

```wolfram
NuclearReactorData["Properties"]
```

Multiple reactors:

```wolfram
NuclearReactorData[EntityList[EntityClass["NuclearReactor", "Country" -> "France"]], "NetElectricalCapacity"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NuclearReactorData.html) for more details.*