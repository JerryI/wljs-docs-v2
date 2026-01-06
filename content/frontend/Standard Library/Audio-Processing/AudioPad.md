# AudioPad

`AudioPad[audio,t]` adds t seconds of silence to the end of audio.

`AudioPad[audio,{t1,t2}]` adds t1 seconds of silence to the beginning and t2 seconds to the end of audio.

`AudioPad[audio,tspec,padding]` pads using the value or method specified by padding.

## Examples

```wolfram
AudioPad[ExampleData[{"Audio", "Violin"}], 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioPad.html) for more details.*