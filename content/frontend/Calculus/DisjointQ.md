---
title: DisjointQ
---

`DisjointQ[list1, list2]` yields `True` if list1 and list2 do not share any common elements, and `False` otherwise.

## Examples

Test disjoint lists:

```wolfram
DisjointQ[{1, 2, 3}, {4, 5, 6}]
(* True *)
```

Lists with common elements:

```wolfram
DisjointQ[{1, 2, 3}, {3, 4, 5}]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DisjointQ.html) for more details.