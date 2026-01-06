# Pruning

`Pruning[image]` removes the outermost branches of thin objects in image by setting their values to black.

- `Pruning[image, n]` removes branches that are at most n pixels long.
- `Pruning[image, {n}]` removes n pixels from each branch.
- `Pruning[image, n, t]` treats values above t as foreground.

## Examples

```wolfram
Pruning[Thinning[Binarize[img]], 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Pruning.html) for more details.*