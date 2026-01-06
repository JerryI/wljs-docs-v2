---
title: ArraySymbol
---

`ArraySymbol[a]` represents an array with name a.

`ArraySymbol[a, {n1, n2, ...}]` represents an n1×n2×… array.

`ArraySymbol[a, {n1, n2, ...}, dom]` represents an array with elements in the domain dom.

## Examples

Create a symbolic array:

```wolfram
ArraySymbol[a, {3, 3}]
```

Symbolic array with specific domain:

```wolfram
ArraySymbol[m, {2, 2}, Integers]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArraySymbol.html) for more details.*