# RemoveBackground

`RemoveBackground[image]` returns an image with an alpha channel where the background is transparent.

`RemoveBackground[image, model]` uses foreground or background model specification.

`RemoveBackground[video, ...]` performs background removal on frames of video.

## Examples

```wolfram
RemoveBackground[ExampleData[{"TestImage", "Lena"}]]
```

```wolfram
RemoveBackground[img, {"Background", White}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoveBackground.html) for more details.*