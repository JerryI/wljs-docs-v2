---
title: MatrixSymbol
---

`MatrixSymbol[a]` represents a matrix with name a.

- `MatrixSymbol[a, {m, n}]` represents an m×n matrix.
- `MatrixSymbol[a, {m, n}, dom]` represents a matrix with elements in the domain dom.
- `MatrixSymbol[a, {m, n}, dom, sym]` represents a matrix with the symmetry sym.

## Examples

```wolfram
MatrixSymbol["A", {3, 3}]
```

```wolfram
MatrixSymbol["M", {2, 2}, Reals, "Symmetric"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatrixSymbol.html) for more details.*