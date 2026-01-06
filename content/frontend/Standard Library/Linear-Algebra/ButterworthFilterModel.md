---
title: ButterworthFilterModel
---

`ButterworthFilterModel[n]` creates a lowpass Butterworth filter of order n and cutoff frequency of 1.

`ButterworthFilterModel[{n, ωc}]` uses the cutoff frequency ωc.

`ButterworthFilterModel[{"type", spec}]` creates a filter of a given "type" using the specified parameters spec.

`ButterworthFilterModel[{"type", spec}, var]` expresses the model in terms of the variable var.

## Examples

Create a 4th order Butterworth filter:

```wolfram
ButterworthFilterModel[4]
```

Plot the frequency response:

```wolfram
BodePlot[ButterworthFilterModel[{4, 2 Pi 1000}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ButterworthFilterModel.html) for more details.*