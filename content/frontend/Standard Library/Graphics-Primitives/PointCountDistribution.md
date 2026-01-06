# PointCountDistribution

`PointCountDistribution[pproc, reg]` represents the distribution of point counts for the point process pproc in the region reg.

- `PointCountDistribution[pproc, {reg1, ..., regn}]` represents the joint distribution of point counts in regions regi.

## Examples

Poisson process counts:

```wolfram
dist = PointCountDistribution[PoissonPointProcess[1], Rectangle[]];
Mean[dist]
```

Sample from distribution:

```wolfram
RandomVariate[dist, 10]
```

Joint distribution:

```wolfram
PointCountDistribution[PoissonPointProcess[1], {Disk[], Rectangle[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointCountDistribution.html) for more details.*