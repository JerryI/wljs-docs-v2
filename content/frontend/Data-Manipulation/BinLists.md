---
title: BinLists
---

`BinLists[data]` gives lists of the elements of data whose values lie in successive integer bins.

`BinLists[data, binspec]` gives lists of the elements of data whose values lie in successive bins specified by binspec.

`BinLists[data -> inds, ...]` gives the lists of the labels inds specified by the binning of data.

## Examples

Group data by integer bins:

```wolfram
BinLists[{1, 2, 2, 3, 3, 3}]
(* {{1}, {2, 2}, {3, 3, 3}} *)
```

Custom bin specification:

```wolfram
BinLists[{0.5, 1.2, 1.8, 2.5}, {0, 3, 1}]
(* {{0.5}, {1.2, 1.8}, {2.5}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinLists.html) for more details.