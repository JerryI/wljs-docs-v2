---
title: SemanticSearch
---

`SemanticSearch[index, query]` finds the items similar to query inside index.

- `SemanticSearch[index, query -> f]` filters the results using the function f.
- `SemanticSearch[index, query, prop]` returns the specified property prop.

## Examples

Search a semantic index:

```wolfram
index = SemanticSearchIndex[{"apple", "banana", "car", "truck"}];
SemanticSearch[index, "fruit"]
```

Filter results:

```wolfram
SemanticSearch[index, "vehicle" -> (StringLength[#] > 3 &)]
```

Get distances:

```wolfram
SemanticSearch[index, "food", "Distances"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SemanticSearch.html) for more details.