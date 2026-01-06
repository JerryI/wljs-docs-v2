---
title: FrameRate
---

`FrameRate` is an option to specify the number of frames per second.

## Examples

Export a video with a specific frame rate:

```wolfram
Export["animation.mp4", frames, FrameRate -> 30]
```

Create a video with 24 fps:

```wolfram
VideoGenerator[f, 10, FrameRate -> 24]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FrameRate.html) for more details.*