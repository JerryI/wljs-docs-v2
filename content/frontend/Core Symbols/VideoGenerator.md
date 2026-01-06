# VideoGenerator

`VideoGenerator[imagespec]` generates a video with frames generated from imagespec.

- `VideoGenerator[<|"Image" -> imagespec, "Audio" -> audiospec|>]` returns a video with audio data generated from audioexpr.
- `VideoGenerator[..., dur]` generates a video of duration dur.

## Examples

```wolfram
VideoGenerator[RandomImage[], 5]
```

```wolfram
VideoGenerator[Table[Graphics[{Hue[t], Disk[]}], {t, 0, 1, 0.1}], 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoGenerator.html) for more details.*