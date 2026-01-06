# AudioTrim

`AudioTrim[audio]` trims silence from the beginning and end of audio.

`AudioTrim[audio, t]` returns the first t seconds of audio.

`AudioTrim[audio, -t]` returns the last t seconds of audio.

`AudioTrim[audio, {t1, t2}]` returns audio starting at time t1 and ending at time t2.

## Examples

Trim audio to a specific interval:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioTrim[audio, {1, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioTrim.html) for more details.*