# ImageContents

`ImageContents[image]` gives a dataset of identified entities in `image`.

- `ImageContents[image, category]` gives a dataset that only contains entities in the specified category.
- `ImageContents[image, category, prop]` includes the properties `prop` for each identified object.
- `ImageContents[video, …]` gives a time series of detected objects in frames of `video`.

## Examples

```wolfram
ImageContents[ExampleData[{"TestImage", "Lena"}]]
```

```wolfram
ImageContents[image, "Object", {"BoundingBox", "Probability"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageContents.html) for more details.*