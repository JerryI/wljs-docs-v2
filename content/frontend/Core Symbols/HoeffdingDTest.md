# HoeffdingDTest

`HoeffdingDTest[v1, v2]` tests whether the vectors v1 and v2 are independent.

- `HoeffdingDTest[..., "property"]` returns the value of "property".

## Examples

Test independence:

```wolfram
v1 = RandomReal[1, 100];
v2 = RandomReal[1, 100];
HoeffdingDTest[v1, v2]
```

Get p-value:

```wolfram
HoeffdingDTest[v1, v2, "PValue"]
```

Test statistic:

```wolfram
HoeffdingDTest[v1, v2, "TestStatistic"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HoeffdingDTest.html) for more details.*