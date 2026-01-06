# FrameListVideo

`FrameListVideo[{img1, img2, ...}]` generates a video containing frames img1, img2, etc.

- `FrameListVideo[files]` generates a video from existing image files.

## Examples

Create a video from a list of images:

```wolfram
frames = Table[Plot[Sin[x + t], {x, 0, 2 Pi}], {t, 0, 2 Pi, 0.2}];
FrameListVideo[frames]
```

Create a video from image files:

```wolfram
FrameListVideo[FileNames["*.png", "frames/"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FrameListVideo.html) for more details.*