# GaugeFaceElementFunction

`GaugeFaceElementFunction` is an option for gauge functions that gives a function to use to generate the primitives for rendering the gauge face.

## Examples

Customize the gauge face:

```wolfram
AngularGauge[0.5, GaugeFaceElementFunction -> (Disk[{0, 0}, 1, {0, Pi}] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GaugeFaceElementFunction.html) for more details.*