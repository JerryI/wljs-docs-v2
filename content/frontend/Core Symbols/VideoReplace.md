# VideoReplace

`VideoReplace[video, {t1, t2} -> new]` replaces the video between t1 and t2 with the new video new.

- `VideoReplace[video, {{t11, t12}, ...} -> new]` replaces multiple intervals with the same video new.
- `VideoReplace[video, {{t11, t12} -> new1, ...}]` replaces multiple intervals.
- `VideoReplace[video, ..., durfitting]` uses the specified durfitting method to replace an interval of a different duration.

## Examples

Replace a section of video:
```wolfram
VideoReplace[video, {Quantity[2, "Seconds"], Quantity[5, "Seconds"]} -> newClip]
```

Replace multiple intervals:
```wolfram
VideoReplace[video, {{Quantity[1, "Seconds"], Quantity[2, "Seconds"]} -> clip1, {Quantity[5, "Seconds"], Quantity[7, "Seconds"]} -> clip2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoReplace.html) for more details.*