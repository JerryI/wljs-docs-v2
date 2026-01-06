---
title: TakeList
---

`TakeList[list,{n1,n2,…}]` gives the list of results obtained by successively taking ni elements from list.

`TakeList[list,{seq1,seq2,…}]` successively uses the sequence specifications seqi.

`TakeList[list,seqs1,seqs2,…]` gives a nested list in which elements specified by the lists seqsi are taken at level i in list.

## Examples

Take successive groups of elements:

```wolfram
TakeList[{a, b, c, d, e, f, g}, {2, 3, 2}]
(* {{a, b}, {c, d, e}, {f, g}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TakeList.html) for more details.*