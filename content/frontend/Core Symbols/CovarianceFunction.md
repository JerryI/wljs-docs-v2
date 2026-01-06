# CovarianceFunction

`CovarianceFunction[data, hspec]` estimates the covariance function at lags hspec from data.

`CovarianceFunction[proc, hspec]` represents the covariance function at lags hspec for the random process proc.

`CovarianceFunction[proc, s, t]` represents the covariance function at times s and t for the random process proc.

## Examples

Estimate covariance from data:

```wolfram
data = RandomReal[1, 100];
CovarianceFunction[data, {1, 2, 3}]
```

Covariance function of a Wiener process:

```wolfram
CovarianceFunction[WienerProcess[], s, t]
(* Min[s, t] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CovarianceFunction.html) for more details.*