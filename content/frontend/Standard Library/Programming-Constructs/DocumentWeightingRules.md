---
title: DocumentWeightingRules
---

`DocumentWeightingRules` is an option for `TextSearch` and related functions that allows the specification of weights for documents based on the values of fields in the search index.

## Examples

Apply document weighting in a text search:

```wolfram
TextSearch[index, "query", DocumentWeightingRules -> {"Field" -> 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DocumentWeightingRules.html) for more details.*