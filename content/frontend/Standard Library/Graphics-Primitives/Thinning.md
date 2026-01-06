# Thinning

`Thinning[image]` finds the skeletons of foreground regions in image by applying morphological thinning until convergence.

- `Thinning[image, n]` performs n iterations of morphological thinning.
- `Thinning[image, n, t]` treats values above t as foreground.

## Examples

```wolfram
img = Binarize[ExampleData[{"TestImage", "Rectangles"}]];
Thinning[img]
```

```wolfram
Thinning[img, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Thinning.html) for more details.*