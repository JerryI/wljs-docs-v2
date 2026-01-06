# VideoEncoding

`VideoEncoding` is an option for `Export` and other functions that specifies the video encoding to use when creating a video file.

## Examples

Export with H.264 encoding:

```wolfram
Export["video.mp4", frames, VideoEncoding -> "H264"]
```

Use HEVC encoding:

```wolfram
Export["video.mp4", frames, VideoEncoding -> "HEVC"]
```

Lossless encoding:

```wolfram
Export["video.avi", frames, VideoEncoding -> "RawVideo"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoEncoding.html) for more details.*