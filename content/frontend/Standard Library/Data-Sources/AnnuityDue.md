---
title: AnnuityDue
---

`AnnuityDue[p,t]` represents an annuity due of fixed payments p made over t periods.

`AnnuityDue[p,t,q]` represents a series of payments occurring at time intervals q.

`AnnuityDue[{p,{pinitial,pfinal}},t,q]` represents an annuity due with the specified initial and final payments.

## Examples

Calculate the present value of an annuity due:

```wolfram
TimeValue[AnnuityDue[1000, 10], 0.05, 0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnnuityDue.html) for more details.*