# AudioOverlay

`AudioOverlay[{audio1,audio2,…}]` returns an audio object by overlaying all audioi.

## Examples

Overlay two audio signals:

```wolfram
AudioOverlay[{Audio[{Sin[440 2 Pi #] &, 1}], Audio[{Sin[550 2 Pi #] &, 1}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioOverlay.html) for more details.*