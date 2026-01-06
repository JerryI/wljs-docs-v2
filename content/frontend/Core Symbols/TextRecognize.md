# TextRecognize

`TextRecognize[image]` recognizes text in image and returns it as a string.

- `TextRecognize[image, level]` returns a list of strings at the specified structural level.
- `TextRecognize[image, level, prop]` returns prop for text at the given level.
- `TextRecognize[video, ...]` recognizes text in frames of video.

## Examples

Recognize text in image:

```wolfram
img = ExampleData[{"TestImage", "Document"}];
TextRecognize[img]
```

Get words:

```wolfram
TextRecognize[img, "Word"]
```

With bounding boxes:

```wolfram
TextRecognize[img, "Word", {"Text", "BoundingBox"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextRecognize.html) for more details.*