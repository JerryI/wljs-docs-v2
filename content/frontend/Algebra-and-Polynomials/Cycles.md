---
title: Cycles
---

`Cycles[{cyc1, cyc2, ...}]` represents a permutation with disjoint cycles cyci.

## Examples

Create a permutation from cycles:

```wolfram
Cycles[{{1, 3, 2}}]
(* Cycles[{{1, 3, 2}}] *)
```

Convert to list:

```wolfram
PermutationList[Cycles[{{1, 3, 2}}], 4]
(* {3, 1, 2, 4} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Cycles.html) for more details.