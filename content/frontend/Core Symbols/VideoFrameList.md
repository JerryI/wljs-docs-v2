# VideoFrameList

`VideoFrameList[video, n]` gives a list of n images extracted from video.

- `VideoFrameList[video, spec]` gives a list of frames extracted based on spec.

This function extracts frames from a video at specified intervals or positions.

## Examples

```wolfram
VideoFrameList[Video["ExampleData/Caminandes.mp4"], 5]
```

```wolfram
VideoFrameList[Video["ExampleData/Caminandes.mp4"], {0, 1, 2}]
```

```wolfram
VideoFrameList[Video["ExampleData/Caminandes.mp4"], 10] // Length
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoFrameList.html) for more details.*