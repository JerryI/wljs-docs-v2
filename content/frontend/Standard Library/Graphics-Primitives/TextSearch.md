---
title: TextSearch
---

`TextSearch[source, form]` searches for files referenced by source that contain text matching form.

- `TextSearch[source, form, "prop"]` returns the property prop for each result.

This function performs full-text search across documents in a search index.

## Examples

```wolfram
index = CreateSearchIndex[NotebookDirectory[]];
TextSearch[index, "function"]
```

```wolfram
TextSearch[index, "example", "Snippet"]
```

```wolfram
TextSearch[FileNameJoin[{$InstallationDirectory, "Documentation"}], "Plot"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextSearch.html) for more details.*