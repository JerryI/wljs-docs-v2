---
title: VideoIntervals
---

`VideoIntervals[video, crit]` returns time intervals of video for which the criterion crit is satisfied.

- `VideoIntervals[video, crit, n]` evaluates criterion crit on partitions of n video frames.
- `VideoIntervals[video, crit, n, d]` evaluates crit on partitions with offset d.
- `VideoIntervals[{video1, video2, ...}, crit, ...]` applies crit to a list of inputs extracted from each videoi.

## Examples

```wolfram
VideoIntervals[video, ImageQ]
```

```wolfram
VideoIntervals[video, Mean[#] > 0.5 &, 10]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoIntervals.html) for more details.