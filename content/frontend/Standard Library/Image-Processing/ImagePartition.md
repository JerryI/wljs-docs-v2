# ImagePartition

`ImagePartition[image, s]` partitions an image into an array of s×s-pixel subimages.

`ImagePartition[image, {w, h}]` uses subimages of width w and height h.

## Examples

Partition into tiles:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
tiles = ImagePartition[img, 128];
Grid[tiles]
```

With overlap:

```wolfram
ImagePartition[img, {100, 100}, {50, 50}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImagePartition.html) for more details.*