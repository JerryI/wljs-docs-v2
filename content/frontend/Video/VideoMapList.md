---
title: VideoMapList
---

`VideoMapList[f, video]` applies f to a chunk of data corresponding to one frame from the Video object video, returning a list of results.

- `VideoMapList[f, video, n]` applies f to overlapping partitions corresponding to n video frames.
- `VideoMapList[f, video, n, d]` applies f to partitions with offset d.
- `VideoMapList[f, {video1, video2, ...}, ...]` applies f to a list of inputs extracted from each videoi.

## Examples

Extract brightness from each frame:
```wolfram
VideoMapList[ImageMeasurements[#, "MeanIntensity"] &, Video["ExampleData/sampleVideo.mp4"]]
```

Process multiple frames at once:
```wolfram
VideoMapList[Total, video, 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoMapList.html) for more details.