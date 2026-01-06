# ComplexPlot3D

`ComplexPlot3D[f, {z, zmin, zmax}]` generates a 3D plot of Abs[f] colored by Arg[f] over the complex rectangle with corners zmin and zmax.

## Examples

3D plot of a complex function:

```wolfram
ComplexPlot3D[z^2, {z, -2 - 2 I, 2 + 2 I}]
```

Plot with poles:

```wolfram
ComplexPlot3D[1/(z^2 + 1), {z, -3 - 3 I, 3 + 3 I}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComplexPlot3D.html) for more details.*