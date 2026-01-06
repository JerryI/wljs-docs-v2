# AudioChannelAssignment

`AudioChannelAssignment` is an option for `Audio` and related functions that specifies a mapping from audio channels to available speakers of the output audio device.

## Examples

Play audio with specific channel assignment:

```wolfram
Audio[SoundNote["C"], AudioChannelAssignment -> {1 -> "FrontLeft"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioChannelAssignment.html) for more details.*