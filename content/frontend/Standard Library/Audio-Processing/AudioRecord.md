# AudioRecord

`AudioRecord[]` returns a new AudioStream object and starts to record from the default input audio device.

`AudioRecord[inputdev]` records from the input audio device inputdev.

`AudioRecord[astream]` starts recording an AudioStream object astream that is connected to an input device.

## Examples

```wolfram
stream = AudioRecord[]
(* AudioStream[...] *)
```

```wolfram
AudioStop[stream];
audio = AudioCapture[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioRecord.html) for more details.*