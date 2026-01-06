---
title: VideoExtractTracks
---

`VideoExtractTracks[video]` returns a list of video, audio and subtitle tracks of video.

- `VideoExtractTracks[video, "type"]` returns tracks from video of a given "type".
- `VideoExtractTracks[video, trackspec]` returns tracks specified by trackspec.

This function extracts individual media tracks from a video file.

## Examples

```wolfram
VideoExtractTracks[Video["ExampleData/Caminandes.mp4"]]
```

```wolfram
VideoExtractTracks[Video["ExampleData/Caminandes.mp4"], "Audio"]
```

```wolfram
VideoExtractTracks[Video["ExampleData/Caminandes.mp4"], "Video"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoExtractTracks.html) for more details.*