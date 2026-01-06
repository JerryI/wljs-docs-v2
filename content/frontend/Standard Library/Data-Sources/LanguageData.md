---
title: LanguageData
---

`LanguageData[entity, property]` gives the value of the specified property for the language entity.

`LanguageData[{entity1, entity2, …}, property]` gives a list of property values for the specified language entities.

`LanguageData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get the number of speakers for a language:

```wolfram
LanguageData["French", "TotalSpeakers"]
```

Get properties for multiple languages:

```wolfram
LanguageData[{"English", "Spanish", "Mandarin"}, "NativeSpeakers"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LanguageData.html) for more details.*