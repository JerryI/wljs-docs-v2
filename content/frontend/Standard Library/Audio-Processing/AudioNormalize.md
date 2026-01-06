# AudioNormalize

`AudioNormalize[audio]` normalizes audio so that the maximum absolute value of its samples is 1.

`AudioNormalize[audio, model]` normalizes the audio signal based on the specified model.

`AudioNormalize[video]` normalizes the first audio track in video.

## Examples

Normalize audio volume:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioNormalize[audio]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioNormalize.html) for more details.*