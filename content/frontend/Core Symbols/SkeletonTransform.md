# SkeletonTransform

`SkeletonTransform[image]` gives the skeleton transform of image, in which the value of each skeleton pixel is its distance to the nearest background pixel.

- `SkeletonTransform[image, t]` treats values above t as foreground.

## Examples

Compute the skeleton transform of an image:
```wolfram
img = Binarize[ExampleData[{"TestImage", "Blob"}]];
SkeletonTransform[img]
```

Apply with a custom threshold:
```wolfram
SkeletonTransform[ExampleData[{"TestImage", "Fingerprint"}], 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SkeletonTransform.html) for more details.*