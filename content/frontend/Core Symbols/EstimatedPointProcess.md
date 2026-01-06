# EstimatedPointProcess

`EstimatedPointProcess[pdata, pproc]` estimates the parametric point process pproc from point data pdata.

`EstimatedPointProcess[pdata, pproc, {{p, p0}, {q, q0}, ...}]` estimates the parameters p, q, ... with starting values p0, q0, ....

## Examples

Estimate a Poisson point process:

```wolfram
EstimatedPointProcess[data, PoissonPointProcess[λ]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EstimatedPointProcess.html) for more details.*