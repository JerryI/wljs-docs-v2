# VideoStream

`VideoStream[source]` creates a new VideoStream object from source.

- `VideoStream[id]` is an object that represents a unique video stream.

## Examples

Create a video stream from a video file:

```wolfram
stream = VideoStream["ExampleData/airplane.mp4"]
```

Get the current frame from a video stream:

```wolfram
VideoFrameList[stream, 1]
```

Close the video stream when done:

```wolfram
Close[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoStream.html) for more details.*