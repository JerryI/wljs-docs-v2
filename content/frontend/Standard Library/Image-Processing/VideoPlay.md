---
title: VideoPlay
---

`VideoPlay[video]` returns a new `VideoStream` object from video and starts the playback.

- `VideoPlay[vstream]` starts playing a `VideoStream` object vstream.

## Examples

```wolfram
VideoPlay[Video["ExampleData/video.mp4"]]
```

```wolfram
stream = VideoStream[Video["test.mp4"]];
VideoPlay[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoPlay.html) for more details.*