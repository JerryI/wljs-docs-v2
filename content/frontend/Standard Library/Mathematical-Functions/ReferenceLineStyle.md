---
title: ReferenceLineStyle
---

`ReferenceLineStyle` is an option for `QuantilePlot` and similar functions that specifies the style used for the reference line.

The reference line typically represents the theoretical distribution being compared against.

## Examples

```wolfram
QuantilePlot[RandomVariate[NormalDistribution[], 100], 
  ReferenceLineStyle -> {Red, Dashed}]
```

```wolfram
QuantilePlot[data, NormalDistribution[], ReferenceLineStyle -> Thick]
```

```wolfram
ProbabilityPlot[data, ReferenceLineStyle -> {Blue, Thickness[0.01]}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReferenceLineStyle.html) for more details.*