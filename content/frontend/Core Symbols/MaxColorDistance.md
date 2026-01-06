# MaxColorDistance

`MaxColorDistance` is an option to specify the maximum distance allowed between colors.

## Examples

Replace colors within a distance threshold:
```wolfram
ColorReplace[image, Red -> Blue, MaxColorDistance -> 0.1]
```

Use in image segmentation:
```wolfram
ClusteringComponents[image, MaxColorDistance -> 0.2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxColorDistance.html) for more details.*