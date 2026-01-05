# AudioResample

`AudioResample[audio, sr]` resamples audio to have the sample rate of sr.

`AudioResample[video, sr]` resamples the first audio track in video to have the sample rate of sr.

## Examples

Resample audio to 22050 Hz:

```wolfram
audio = ExampleData[{"Audio", "Flute"}];
AudioResample[audio, 22050]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioResample.html) for more details.*