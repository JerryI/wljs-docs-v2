---
title: ExcludedForms
---

`ExcludedForms` is an option that gives a list of patterns for expressions that should be excluded from an operation performed by a particular function.

## Examples

Exclude specific forms:

```wolfram
Simplify[expr, ExcludedForms -> {_Log}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExcludedForms.html) for more details.*