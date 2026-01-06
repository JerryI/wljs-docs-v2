---
title: VideoSplit
---

`VideoSplit[video, t]` splits video at time t.

- `VideoSplit[video, {t1, t2, ...}]` splits video at times ti.

## Examples

Split a video at 5 seconds:
```wolfram
VideoSplit[Video["ExampleData/sampleVideo.mp4"], Quantity[5, "Seconds"]]
```

Split at multiple time points:
```wolfram
VideoSplit[video, {Quantity[2, "Seconds"], Quantity[5, "Seconds"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoSplit.html) for more details.*