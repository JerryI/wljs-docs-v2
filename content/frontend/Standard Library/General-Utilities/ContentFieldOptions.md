---
title: ContentFieldOptions
---

`ContentFieldOptions` is an option for CreateSearchIndex and related functions that allows options to be specified for handling different fields in content that is being indexed.

## Examples

```wolfram
CreateSearchIndex[data, ContentFieldOptions -> {"Title" -> {"Boost" -> 2}}]
(* SearchIndexObject[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContentFieldOptions.html) for more details.*