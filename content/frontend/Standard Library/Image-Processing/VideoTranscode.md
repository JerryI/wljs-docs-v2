---
title: VideoTranscode
---

`VideoTranscode[video, "format"]` converts video to the specified format.

- `VideoTranscode[video, service]` converts video to the specification recommended by the specified service.
- `VideoTranscode[{v1, v2, ...}, ...]` converts all vi videos to have conforming properties with respect to the given specification.

## Examples

```wolfram
VideoTranscode[Video["input.avi"], "MP4"]
```

```wolfram
VideoTranscode[Video["input.mov"], "YouTube"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoTranscode.html) for more details.*