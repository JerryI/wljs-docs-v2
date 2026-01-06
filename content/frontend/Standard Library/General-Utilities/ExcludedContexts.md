---
title: ExcludedContexts
---

`ExcludedContexts` is an option for `FullDefinition`, `Manipulate` and related symbols that gives contexts whose symbols will not have the definitions recursively saved.

## Examples

Exclude a context from definitions:

```wolfram
FullDefinition[f, ExcludedContexts -> {"System`"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExcludedContexts.html) for more details.*