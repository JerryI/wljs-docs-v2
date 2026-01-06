# CentralMoment

`CentralMoment[data, r]` gives the order r central moment of data.

`CentralMoment[data, {r1, ..., rm}]` gives the multivariate central moment of order {r1, ..., rm}.

`CentralMoment[dist, r]` gives the central moment of the distribution dist.

## Examples

Compute the second central moment (variance):

```wolfram
CentralMoment[{1, 2, 3, 4, 5}, 2]
(* 2 *)
```

Third central moment of a distribution:

```wolfram
CentralMoment[NormalDistribution[0, 1], 3]
(* 0 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CentralMoment.html) for more details.*