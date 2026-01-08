---
title: OneIdentity
---

`OneIdentity` is an attribute that can be assigned to a symbol f to indicate that f[x], f[f[x]], etc. are all equivalent to x for the purpose of pattern matching.

## Examples

```wolfram
SetAttributes[f, OneIdentity];
MatchQ[f[x], x_]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OneIdentity.html) for more details.*