# AudioChannels

`AudioChannels[audio]` returns the number of channels in the Audio object audio.

`AudioChannels[video]` returns the number of channels of the first audio track of video.

## Examples

Get the number of audio channels:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioChannels[audio]
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioChannels.html) for more details.*