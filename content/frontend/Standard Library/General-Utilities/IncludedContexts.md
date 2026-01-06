---
title: IncludedContexts
---

`IncludedContexts` is an option for `FullDefinition`, `Manipulate` and related symbols that gives contexts whose symbols will have their definitions recursively saved.

## Examples

```wolfram
FullDefinition[myFunction, IncludedContexts -> {"MyPackage`"}]
```

```wolfram
Manipulate[x, {x, 0, 1}, IncludedContexts -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncludedContexts.html) for more details.*