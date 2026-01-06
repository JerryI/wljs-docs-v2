# GaugeFrameElementFunction

`GaugeFrameElementFunction` is an option for gauge functions that gives a function to generate the primitives for rendering the gauge frame.

## Examples

Create a gauge with a custom frame:

```wolfram
AngularGauge[75, GaugeFrameElementFunction -> (Circle[#1, #2] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GaugeFrameElementFunction.html) for more details.*