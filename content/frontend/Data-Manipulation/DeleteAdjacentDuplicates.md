---
title: DeleteAdjacentDuplicates
---

`DeleteAdjacentDuplicates[list]` deletes all duplicates in runs of identical elements in list.

`DeleteAdjacentDuplicates[list, test]` applies test to pairs of consecutive elements to determine whether they should be considered duplicates.

## Examples

Remove adjacent duplicates:

```wolfram
DeleteAdjacentDuplicates[{1, 1, 2, 2, 2, 3, 1, 1}]
(* {1, 2, 3, 1} *)
```

With custom test:

```wolfram
DeleteAdjacentDuplicates[{1, 2, 1, 3, 2}, Abs[#1 - #2] < 2 &]
(* {1, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteAdjacentDuplicates.html) for more details.*