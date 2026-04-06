---
title: SearchIndexObject
---

`SearchIndexObject[loc]` represents a search index object, as created by `CreateSearchIndex`.

- `SearchIndexObject["name"]` represents the search index with the specified name in the `SearchIndices[]` list.

## Examples

Create a search index from files:

```wolfram
index = CreateSearchIndex[NotebookDirectory[]]
```

Search within the index:

```wolfram
TextSearch[index, "query"]
```

List all available search indices:

```wolfram
SearchIndices[]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SearchIndexObject.html) for more details.