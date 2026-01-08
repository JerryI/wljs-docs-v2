---
title: ParallelTable
---

`ParallelTable[expr,{imax}]` generates in parallel a list of imax copies of expr.

`ParallelTable[expr,{i,imax}]` generates in parallel a list of the values of expr when i runs from 1 to imax.

`ParallelTable[expr,{i,imin,imax}]` starts with i=imin.

`ParallelTable[expr,{i,imin,imax,di}]` uses steps di.

`ParallelTable[expr,{i,{i1,i2,…}}]` uses the successive values i1, i2, ….

`ParallelTable[expr,{i,imin,imax},{j,jmin,jmax},…]` gives a nested list. The list associated with i is outermost.

## Examples

Generate a list in parallel:

```wolfram
ParallelTable[i^2, {i, 10}]
(* {1, 4, 9, 16, 25, 36, 49, 64, 81, 100} *)
```

Create a nested list:

```wolfram
ParallelTable[i + j, {i, 3}, {j, 3}]
(* {{2, 3, 4}, {3, 4, 5}, {4, 5, 6}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParallelTable.html) for more details.