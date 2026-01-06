# ImageFeatureTrack

`ImageFeatureTrack[{image1, image2, ..., imagen}]` tracks features from image1 through imagen.

`ImageFeatureTrack[{image1, ..., imagen}, pts]` tracks from initial points pts.

## Examples

Track features across frames:

```wolfram
frames = Table[RotationTransform[i Degree][img], {i, 0, 10}];
ImageFeatureTrack[frames]
```

Track specific points:

```wolfram
ImageFeatureTrack[frames, {{100, 100}, {200, 200}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageFeatureTrack.html) for more details.*