# AudioDelay

`AudioDelay[audio, delay]` creates audio by adding repeated decaying echos to audio spaced by the specified delay.

`AudioDelay[audio, delay, feedback]` uses the specified feedback as the amount of signal to preserve during each repetition.

`AudioDelay[audio, delay, feedback, mix]` uses mix to control the ratio between original and delayed audio.

## Examples

Add an echo effect:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioDelay[audio, 0.3, 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioDelay.html) for more details.*