---
title: HeaderLines
---

`HeaderLines` is an option for `SemanticImport` and related functions that specifies how many of the initial rows should be considered part of a column header.

## Examples

Import CSV with one header row:
```wolfram
SemanticImport["data.csv", HeaderLines -> 1]
```

Skip multiple header rows:
```wolfram
SemanticImport["data.csv", HeaderLines -> 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeaderLines.html) for more details.*