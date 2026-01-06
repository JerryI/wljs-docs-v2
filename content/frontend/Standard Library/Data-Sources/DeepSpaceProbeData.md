---
title: DeepSpaceProbeData
---

`DeepSpaceProbeData[entity, property]` gives the value of the specified property for the deep space probe entity.

`DeepSpaceProbeData[{entity1, entity2, ...}, property]` gives a list of property values for the specified deep space probe entities.

`DeepSpaceProbeData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get data about Voyager 1:

```wolfram
DeepSpaceProbeData[Entity["DeepSpaceProbe", "Voyager1"], "LaunchDate"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeepSpaceProbeData.html) for more details.*