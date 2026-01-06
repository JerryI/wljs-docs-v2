# VideoPause

`VideoPause[]` pauses the playback of all VideoStream objects.

- `VideoPause[vstream]` pauses the playback of the VideoStream object vstream.

## Examples

Pause all video streams:
```wolfram
VideoPause[]
```

Pause a specific video stream:
```wolfram
stream = VideoStream["video.mp4"];
VideoPlay[stream];
VideoPause[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoPause.html) for more details.*