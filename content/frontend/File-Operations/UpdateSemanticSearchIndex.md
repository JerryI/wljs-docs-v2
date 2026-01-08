---
title: UpdateSemanticSearchIndex
---

`UpdateSemanticSearchIndex[index, source]` updates the `SemanticSearchIndex[...]` *index* with the data in *source*.

- `UpdateSemanticSearchIndex[index, {source1, ...}]` updates the `SemanticSearchIndex[...]` index with the collection of sources *sourcei*.
- `UpdateSemanticSearchIndex[index, {source1 -> val1, ...}]` associates the new source *sourcei* to the value *vali*.

## Examples

```wolfram
UpdateSemanticSearchIndex[myIndex, "new document.txt"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UpdateSemanticSearchIndex.html) for more details.