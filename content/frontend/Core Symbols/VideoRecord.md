# VideoRecord

`VideoRecord[source]` creates a VideoStream object and records from source.

- `VideoRecord[vstream]` starts recording a VideoStream object vstream that is connected to an imaging device, a screen or a notebook.

This function captures video from devices like webcams, screens, or other sources.

## Examples

```wolfram
(* Record from default camera *)
vs = VideoRecord[$DefaultImagingDevice]
```

```wolfram
(* Record screen *)
VideoRecord["Screen"]
```

```wolfram
(* Start recording from existing stream *)
stream = VideoStream[$DefaultImagingDevice];
VideoRecord[stream]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoRecord.html) for more details.*