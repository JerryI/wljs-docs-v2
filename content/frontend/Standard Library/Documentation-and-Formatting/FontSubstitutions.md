---
title: FontSubstitutions
---

`FontSubstitutions` is a global option that gives a list of substitutions to try for font family names.

## Examples

View current font substitutions:

```wolfram
CurrentValue[$FrontEnd, FontSubstitutions]
```

Set a font substitution:

```wolfram
SetOptions[$FrontEnd, FontSubstitutions -> {"Helvetica" -> "Arial"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FontSubstitutions.html) for more details.*