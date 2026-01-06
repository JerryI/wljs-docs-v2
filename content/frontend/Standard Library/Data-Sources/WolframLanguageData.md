---
title: WolframLanguageData
---

`WolframLanguageData[entity, property]` gives the value of the specified property for the Wolfram Language symbol entity.

- `WolframLanguageData[{entity1, entity2, ...}, property]` gives a list of property values for the specified Wolfram Language symbol entities.
- `WolframLanguageData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get function description:

```wolfram
WolframLanguageData["Sin", "PlaintextUsage"]
```

Get related functions:

```wolfram
WolframLanguageData["Plot", "RelatedSymbols"]
```

List properties:

```wolfram
WolframLanguageData["Table", "Properties"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WolframLanguageData.html) for more details.*