---
title: LatticeReduce
---

`LatticeReduce[{v1, v2, ...}]` gives a reduced basis for the set of vectors v_i using the LLL algorithm.

## Examples

Reduce a lattice basis:

```wolfram
LatticeReduce[{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}]
```

2D example:

```wolfram
LatticeReduce[{{1, 0}, {3, 4}}]
(* {{1, 0}, {0, 4}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LatticeReduce.html) for more details.