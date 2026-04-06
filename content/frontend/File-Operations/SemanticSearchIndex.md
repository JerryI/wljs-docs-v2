---
title: SemanticSearchIndex
---

`SemanticSearchIndex[...]` represents a semantic search index object.

- `SemanticSearchIndex[source]` attempts to recreate a SemanticSearchIndex from source.

## Examples

Create a semantic search index:
```wolfram
index = CreateSemanticSearchIndex[{"document1", "document2", "document3"}]
```

Search the index:
```wolfram
SemanticSearch[index, "query text"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SemanticSearchIndex.html) for more details.