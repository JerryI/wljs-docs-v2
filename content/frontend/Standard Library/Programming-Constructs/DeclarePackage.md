---
title: DeclarePackage
---

`DeclarePackage["context`", {"name1", "name2", ...}]` declares that `Needs["context`"]` should automatically be executed if a symbol with any of the specified names is ever used.

## Examples

Declare a package for autoloading:

```wolfram
DeclarePackage["MyPackage`", {"MyFunction", "MySymbol"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeclarePackage.html) for more details.*