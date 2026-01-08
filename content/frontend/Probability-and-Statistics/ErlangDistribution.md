---
title: ErlangDistribution
---

`ErlangDistribution[k, λ]` represents the Erlang distribution with shape parameter k and rate λ.

## Examples

Create Erlang distribution:

```wolfram
dist = ErlangDistribution[3, 1]
```

Generate random samples:

```wolfram
RandomVariate[ErlangDistribution[5, 2], 10]
```

Mean of Erlang distribution:

```wolfram
Mean[ErlangDistribution[k, λ]]
(* k/λ *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ErlangDistribution.html) for more details.