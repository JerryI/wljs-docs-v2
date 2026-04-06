---
title: Needs
---

`Needs["context`"]` loads an appropriate file if the specified context is not already in `$Packages`.

`Needs["context`", "file"]` loads file if the specified context is not already in `$Packages`.

## Examples

Load a package:

```wolfram
Needs["Developer`"]
```

Load with explicit file:

```wolfram
Needs["MyPackage`", "path/to/MyPackage.m"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Needs.html) for more details.