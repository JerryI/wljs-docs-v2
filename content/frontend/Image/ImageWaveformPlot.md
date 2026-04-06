---
title: ImageWaveformPlot
---

`ImageWaveformPlot[image]` plots the waveform of image.

- `ImageWaveformPlot[image, colorspace]` plots the waveform of image in colorspace.
- `ImageWaveformPlot[image, channel]` plots the waveform for the specified channel.

## Examples

Plot the waveform of an image:
```wolfram
ImageWaveformPlot[ExampleData[{"TestImage", "Mandrill"}]]
```

Plot in a specific color space:
```wolfram
ImageWaveformPlot[img, "RGB"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageWaveformPlot.html) for more details.