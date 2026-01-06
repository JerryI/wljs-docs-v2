# AudioTrackApply

`AudioTrackApply[f, video]` applies the function f to the first audio track of the Video object video.

## Examples

Apply a function to video's audio track:

```wolfram
video = Video["example.mp4"];
AudioTrackApply[AudioReverse, video]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioTrackApply.html) for more details.*