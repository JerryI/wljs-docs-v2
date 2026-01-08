---
title: VideoFrameMap
---

`VideoFrameMap[f, video]` applies f to each frame of the `Video` object video, returning a new `Video` object.

- `VideoFrameMap[f, video, n]` applies f to overlapping partitions of n video frames.
- `VideoFrameMap[f, video, n, d]` applies f to partitions with offset d.
- `VideoFrameMap[f, {video1, video2, …}, …]` applies f to a list of inputs extracted from each videoi.

## Examples

```wolfram
VideoFrameMap[ImageAdjust, video]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoFrameMap.html) for more details.