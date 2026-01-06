---
title: ScaleRangeStyle
---

`ScaleRangeStyle` is an option for gauge functions to describe how to style different sections of the scale.

## Examples

Style different ranges in a gauge:

```wolfram
AngularGauge[75, {0, 100}, 
  ScaleRangeStyle -> {
    {0, 50} -> Green, 
    {50, 75} -> Yellow, 
    {75, 100} -> Red
  }]
```

With thermometer gauge:

```wolfram
ThermometerGauge[30, {0, 50}, 
  ScaleRangeStyle -> {{0, 20} -> Blue, {20, 50} -> Red}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ScaleRangeStyle.html) for more details.*