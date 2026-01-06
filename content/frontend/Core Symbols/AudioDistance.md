# AudioDistance

`AudioDistance[audio1, audio2]` returns a distance measure between audio1 and audio2.

`AudioDistance[video1, video2]` returns a distance measure between the audio tracks of video1 and video2.

## Examples

Compare two audio samples:

```wolfram
a1 = AudioGenerator["Sin", 1];
a2 = AudioGenerator["Sin", 1];
AudioDistance[a1, a2]
(* 0. *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioDistance.html) for more details.*