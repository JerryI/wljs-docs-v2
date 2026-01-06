# ImageValuePositions

`ImageValuePositions[image,val]` returns a list of pixel positions in image that exactly match the value val.

`ImageValuePositions[image,val,d]` returns all pixel positions that have values within a distance d from val.

## Examples

Find positions of white pixels:

```wolfram
img = Image[{{0, 1}, {1, 0}}];
ImageValuePositions[img, 1]
(* {{1, 2}, {2, 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageValuePositions.html) for more details.*