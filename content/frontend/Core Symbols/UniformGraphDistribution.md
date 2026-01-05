# UniformGraphDistribution

`UniformGraphDistribution[n, m]` represents a uniform graph distribution on n-vertex, m-edge graphs.

## Examples

```wolfram
RandomGraph[UniformGraphDistribution[5, 7]]
(* Graph[{1, 2, 3, 4, 5}, {...}] *)
```

```wolfram
Table[RandomGraph[UniformGraphDistribution[6, 8]], 3]
(* {Graph[...], Graph[...], Graph[...]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UniformGraphDistribution.html) for more details.*