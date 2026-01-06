---
title: SubsetCount
---

`SubsetCount[list,sub]` gives a count of the number of times sub appears in any order as a sublist of list.

`SubsetCount[list,patt]` gives the number of sublists in list that match the general pattern patt in any order.

## Examples

Count occurrences of a subset:

```wolfram
SubsetCount[{a, b, c, a, b}, {a, b}]
(* 2 *)
```

Count subsets matching a pattern:

```wolfram
SubsetCount[{1, 2, 3, 4}, {_?OddQ, _?EvenQ}]
(* 4 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SubsetCount.html) for more details.*