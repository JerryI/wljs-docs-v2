---
title: ZeroTest
---

`ZeroTest` is an option to various linear algebra functions that gives a function to use in testing whether symbolic expressions should be treated as zero.

## Examples

Use with RowReduce:

```wolfram
RowReduce[{{1, a}, {1, b}}, ZeroTest -> (Simplify[#] === 0 &)]
```

Custom zero test:

```wolfram
NullSpace[{{1, x}, {1, x}}, ZeroTest -> (PossibleZeroQ[#] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ZeroTest.html) for more details.*