---
title: VideoMap
---

`VideoMap[f, video]` applies f to partial video and audio data corresponding to one frame of video, returning a new video.

- `VideoMap[f, video, n]` applies f to data corresponding to overlapping partitions of n video frames.
- `VideoMap[f, video, n, d]` applies f to partitions with offset d.
- `VideoMap[f, {video1, video2, ...}, ...]` applies f to a list of inputs extracted from each videoi.

## Examples

```wolfram
VideoMap[ImageAdjust, video]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoMap.html) for more details.*