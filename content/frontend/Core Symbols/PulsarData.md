# PulsarData

`PulsarData[entity, property]` gives the value of the specified property for the pulsar entity.

- `PulsarData[{entity1, entity2, ...}, property]` gives a list of property values for the specified pulsar entities.
- `PulsarData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get information about a pulsar:

```wolfram
PulsarData[Entity["Pulsar", "PSR0531Plus21"], "Period"]
```

List all available properties:

```wolfram
PulsarData["Properties"]
```

Get multiple pulsars' data:

```wolfram
PulsarData[PulsarData[], "RotationFrequency"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PulsarData.html) for more details.*