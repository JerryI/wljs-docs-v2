---
title: SymmetrizedArray
---

`SymmetrizedArray[{pos1 -> val1, pos2 -> val2, ...}, dims, sym]` yields an array of dimensions dims whose entries are given by those in the rules posi -> vali or through the symmetry sym.

- `SymmetrizedArray[list]` yields a symmetrized array version of list.

## Examples

```wolfram
SymmetrizedArray[{{1, 2} -> a, {2, 1} -> a}, {3, 3}, Symmetric[{1, 2}]]
```

```wolfram
SymmetrizedArray[{{1, 0}, {0, 1}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SymmetrizedArray.html) for more details.