---
title: Annuity
---

`Annuity[p, t]` represents an annuity of fixed payments p made over t periods.

`Annuity[p, t, q]` represents a series of payments occurring at time intervals q.

## Examples

Calculate the present value of an annuity:

```wolfram
TimeValue[Annuity[1000, 10], 0.05, 0]
```

Annuity with monthly payments:

```wolfram
Annuity[100, 5, 1/12]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Annuity.html) for more details.*