# MaxOverlapFraction

`MaxOverlapFraction` is an option that specifies the maximum acceptable overlap between different identifications.

## Examples

Limit object overlap in detection:
```wolfram
ImageBoundingBoxes[image, MaxOverlapFraction -> 0.3]
```

Use with face detection:
```wolfram
FindFaces[image, MaxOverlapFraction -> 0.1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxOverlapFraction.html) for more details.*