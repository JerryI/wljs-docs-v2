# DimensionReduction

`DimensionReduction[{example1,example2,…}]` generates a `DimensionReducerFunction[…]` that projects from the space defined by the examplei to a lower-dimensional approximating manifold.

`DimensionReduction[examples,n]` generates a `DimensionReducerFunction[…]` for an n-dimensional approximating manifold.

`DimensionReduction[examples,n,props]` generates the specified properties of the dimensionality reduction.

## Examples

Reduce dimensionality of data:

```wolfram
data = RandomReal[1, {100, 10}];
reducer = DimensionReduction[data, 2]
(* DimensionReducerFunction[...] *)
```

Apply the reducer:

```wolfram
reducer[data[[1]]]
(* {0.123, 0.456} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DimensionReduction.html) for more details.*