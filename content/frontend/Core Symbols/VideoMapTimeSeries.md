# VideoMapTimeSeries

`VideoMapTimeSeries[f, video]` applies f to each frame of the Video object video, returning a time series.

- `VideoMapTimeSeries[f, video, n]` applies f to overlapping partitions of n video frames.
- `VideoMapTimeSeries[f, video, n, d]` applies f to partitions with offset d.
- `VideoMapTimeSeries[f, {video1, video2, ...}, ...]` applies f to a list of inputs extracted from each videoi.

## Examples

Extract brightness over time:
```wolfram
VideoMapTimeSeries[ImageMeasurements[#, "MeanIntensity"] &, video]
```

Process multiple frames at once:
```wolfram
VideoMapTimeSeries[Mean, video, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoMapTimeSeries.html) for more details.*