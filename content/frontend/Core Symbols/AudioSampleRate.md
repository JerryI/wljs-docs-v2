# AudioSampleRate

`AudioSampleRate[audio]` returns the sample rate of the Audio object audio.

`AudioSampleRate[video]` returns the sample rate of the first audio track of video.

## Examples

Get sample rate:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioSampleRate[audio]
(* 44100 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioSampleRate.html) for more details.*