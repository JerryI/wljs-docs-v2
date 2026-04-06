---
title: Partition
---

`Partition[list, n]` partitions list into nonoverlapping sublists of length n.

`Partition[list, n, d]` generates sublists with offset d.

## Examples

Partition into pairs:

```wolfram
Partition[{a, b, c, d, e, f}, 2]
(* {{a, b}, {c, d}, {e, f}} *)
```

Overlapping partitions:

```wolfram
Partition[{1, 2, 3, 4, 5}, 3, 1]
(* {{1, 2, 3}, {2, 3, 4}, {3, 4, 5}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Partition.html) for more details.