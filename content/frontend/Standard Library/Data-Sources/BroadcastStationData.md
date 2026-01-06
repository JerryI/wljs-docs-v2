# BroadcastStationData

`BroadcastStationData[entity, property]` gives the value of the specified property for the broadcast station entity.

`BroadcastStationData[{entity1, entity2, ...}, property]` gives a list of property values for the specified broadcast station entities.

## Examples

Get station information:

```wolfram
BroadcastStationData[Entity["BroadcastStation", "WABC"], "Frequency"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BroadcastStationData.html) for more details.*