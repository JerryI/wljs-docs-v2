# Cashflow

`Cashflow[{c0, c1, ..., cn}]` represents a series of cash flows occurring at unit time intervals.

`Cashflow[{c0, c1, ..., cn}, q]` represents cash flows occurring at time intervals q.

`Cashflow[{{time1, c1}, {time2, c2}, ...}]` represents cash flows occurring at the specified times.

## Examples

Create a cashflow:

```wolfram
cf = Cashflow[{-100, 10, 10, 110}]
```

Calculate net present value:

```wolfram
TimeValue[cf, 0.05, 0]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Cashflow.html) for more details.*