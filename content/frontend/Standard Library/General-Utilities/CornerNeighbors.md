# CornerNeighbors

`CornerNeighbors` is an option for various array and image processing functions that specifies whether diagonally adjacent corners should be considered neighbors of particular elements.

## Examples

Include corner neighbors in morphological operations:

```wolfram
Dilation[image, 1, CornerNeighbors -> True]
```

Exclude corner neighbors:

```wolfram
Erosion[image, 1, CornerNeighbors -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CornerNeighbors.html) for more details.*