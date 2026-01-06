# ParametricRegion

`ParametricRegion[{f1, ..., fn}, {u1, ..., um}]` represents a region given by parametric functions.

## Examples

Circle as parametric region:

```wolfram
reg = ParametricRegion[{Cos[t], Sin[t]}, {{t, 0, 2 Pi}}];
RegionPlot[reg]
```

Parametric surface:

```wolfram
ParametricRegion[{u Cos[v], u Sin[v], u}, {{u, 0, 1}, {v, 0, 2 Pi}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParametricRegion.html) for more details.*