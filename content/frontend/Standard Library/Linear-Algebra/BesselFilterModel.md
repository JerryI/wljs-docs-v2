---
title: BesselFilterModel
---

`BesselFilterModel[n]` designs a lowpass Bessel filter of order n and cutoff frequency 1.

`BesselFilterModel[{n, ωc}]` uses the cutoff frequency ωc.

`BesselFilterModel[{n, ωc}, var]` expresses the model in terms of the variable var.

## Examples

Create a 3rd order Bessel filter:

```wolfram
BesselFilterModel[3]
```

Plot the magnitude response:

```wolfram
BodePlot[BesselFilterModel[{3, 1}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BesselFilterModel.html) for more details.*