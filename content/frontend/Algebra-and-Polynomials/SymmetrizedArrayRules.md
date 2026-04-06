---
title: SymmetrizedArrayRules
---

`SymmetrizedArrayRules[sa]` returns a list of rules posi -> vali of the symmetrized array sa.

- `SymmetrizedArrayRules[a, sym]` returns a list of rules posi -> vali of the array a after being symmetrized with symmetry sym.

## Examples

```wolfram
sa = SymmetrizedArray[{{1, 2} -> a, {2, 1} -> b}, {3, 3}, Symmetric[{1, 2}]];
SymmetrizedArrayRules[sa]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SymmetrizedArrayRules.html) for more details.