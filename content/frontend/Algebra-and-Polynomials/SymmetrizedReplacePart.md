---
title: SymmetrizedReplacePart
---

`SymmetrizedReplacePart[sa,{pos1->val1,pos2->val2,…}]` replaces independent values of the symmetrized array sa as given by the rules posi->vali.

## Examples

Replace a value in a symmetric array:

```wolfram
sa = SymmetrizedArray[{{1, 2} -> a, {2, 1} -> a}, {2, 2}, Symmetric[{1, 2}]];
SymmetrizedReplacePart[sa, {{1, 2} -> b}]
```

Modify an antisymmetric array:

```wolfram
asa = SymmetrizedArray[{{1, 2} -> x}, {3, 3}, Antisymmetric[{1, 2}]];
SymmetrizedReplacePart[asa, {{1, 3} -> y}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SymmetrizedReplacePart.html) for more details.