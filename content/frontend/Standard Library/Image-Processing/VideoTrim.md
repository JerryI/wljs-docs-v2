---
title: VideoTrim
---

`VideoTrim[video,t]` returns the first t seconds of video.

`VideoTrim[video,-t]` returns the last t seconds of video.

`VideoTrim[video,{t1,t2}]` returns video starting at time t1 and ending at time t2 of video.

`VideoTrim[video,{{t11,t12},…}]` returns a list of video objects for all given intervals {ti1,ti2}.

## Examples

Get the first 5 seconds of a video:

```wolfram
VideoTrim[video, 5]
```

Extract a specific time range:

```wolfram
VideoTrim[video, {10, 20}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoTrim.html) for more details.*