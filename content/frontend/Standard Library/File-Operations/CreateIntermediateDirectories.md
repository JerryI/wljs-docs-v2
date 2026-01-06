---
title: CreateIntermediateDirectories
---

`CreateIntermediateDirectories` is an option for CreateDirectory and related functions that specifies whether to create intermediate directories in a directory path specified.

## Examples

Create nested directories automatically:

```wolfram
CreateDirectory["path/to/new/folder", CreateIntermediateDirectories -> True]
```

Default behavior (creates intermediate directories):

```wolfram
CreateDirectory["a/b/c/d"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CreateIntermediateDirectories.html) for more details.*