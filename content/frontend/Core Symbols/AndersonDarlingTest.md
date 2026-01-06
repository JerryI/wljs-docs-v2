# AndersonDarlingTest

`AndersonDarlingTest[data]` tests whether data is normally distributed using the Anderson-Darling test.

`AndersonDarlingTest[data, dist]` tests whether data is distributed according to dist using the Anderson-Darling test.

`AndersonDarlingTest[data, dist, "property"]` returns the value of "property".

## Examples

Test for normality:

```wolfram
data = RandomVariate[NormalDistribution[], 100];
AndersonDarlingTest[data]
(* p-value *)
```

Test against a specific distribution:

```wolfram
AndersonDarlingTest[data, ExponentialDistribution[1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AndersonDarlingTest.html) for more details.*