# CategoricalDistribution

`CategoricalDistribution[{c1, c2, ...}]` represents a uniform categorical distribution over classes c1, c2, etc.

`CategoricalDistribution[{c1, c2, ...}, {w1, w2, ...}]` represents a categorical distribution over classes ci with weights wi.

`CategoricalDistribution[{{a1, a2, ...}, {b1, b2, ...}, ...}]` represents a uniform multivariate categorical distribution over the Cartesian product domain.

## Examples

Create a uniform categorical distribution:

```wolfram
dist = CategoricalDistribution[{"a", "b", "c"}];
RandomVariate[dist, 5]
(* {"b", "a", "c", "a", "b"} *)
```

Create a weighted categorical distribution:

```wolfram
dist = CategoricalDistribution[{"red", "green", "blue"}, {0.5, 0.3, 0.2}];
PDF[dist, "red"]
(* 0.5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CategoricalDistribution.html) for more details.*