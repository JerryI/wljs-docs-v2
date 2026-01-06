---
title: VideoFrameFold
---

`VideoFrameFold[f, img0, video]` gives a video whose frames are {f[img0, img1], f[f[img0, img1], img2], …}, where imgi are frames of video.

- `VideoFrameFold[f, video]` assumes the first frame to be the initial frame.
- `VideoFrameFold[f, img0, video, n]` uses partitions of n frames of the video for each step.
- `VideoFrameFold[f, img0, video, n, d]` uses partitions of n frames with offset of d frames for each step.

## Examples

```wolfram
VideoFrameFold[ImageAdd, video]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoFrameFold.html) for more details.*