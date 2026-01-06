# GraphProduct

`GraphProduct[g1, g2]` gives the Cartesian product of the graphs `g1` and `g2`.

- `GraphProduct[g1, g2, "op"]` gives the product of type `"op"` for the graphs `g1` and `g2`.

## Examples

```wolfram
GraphProduct[PathGraph[{1, 2, 3}], PathGraph[{a, b}]]
```

```wolfram
GraphProduct[CycleGraph[4], CycleGraph[4], "Tensor"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphProduct.html) for more details.*