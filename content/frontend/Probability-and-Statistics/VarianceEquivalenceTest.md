---
title: VarianceEquivalenceTest
---

`VarianceEquivalenceTest[{data1,data2,…}]` tests whether the variances of the datai are equal.

`VarianceEquivalenceTest[{data1,…},"property"]` returns the value of "property".

## Examples

Test if two samples have equal variances:

```wolfram
data1 = RandomVariate[NormalDistribution[0, 1], 50];
data2 = RandomVariate[NormalDistribution[0, 2], 50];
VarianceEquivalenceTest[{data1, data2}]
```

Get the p-value:

```wolfram
VarianceEquivalenceTest[{data1, data2}, "PValue"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VarianceEquivalenceTest.html) for more details.*