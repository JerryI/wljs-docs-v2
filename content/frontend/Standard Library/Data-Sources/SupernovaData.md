---
title: SupernovaData
---

`SupernovaData[entity,property]` gives the value of the specified property for the supernova entity.

`SupernovaData[{entity1,entity2,…},property]` gives a list of property values for the specified supernova entities.

`SupernovaData[entity,property,annotation]` gives the specified annotation associated with the given property.

## Examples

Get information about a supernova:

```wolfram
SupernovaData["SN1987A", "ApparentMagnitude"]
```

List available properties:

```wolfram
SupernovaData["Properties"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SupernovaData.html) for more details.*