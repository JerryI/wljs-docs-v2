---
title: CreateSearchIndex
---

`CreateSearchIndex[dir]` creates a search index from all files in the directory dir and its subdirectories.

`CreateSearchIndex[{source1, source2, ...}]` creates a search index from all sources sourcei.

`CreateSearchIndex[sources, "name"]` gives the search index the specified name.

`CreateSearchIndex[]` creates an empty search index, which can be added to with `AddToSearchIndex`.

## Examples

Create a search index from a directory:

```wolfram
CreateSearchIndex["/path/to/docs"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CreateSearchIndex.html) for more details.