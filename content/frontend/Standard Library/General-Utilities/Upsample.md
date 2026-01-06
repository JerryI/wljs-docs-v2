# Upsample

`Upsample[array, n]` returns an upsampled version of the array by inserting n-1 zeros between array elements.

- `Upsample[array, n, offset]` shifts array so that its first element moves to the position offset in the resulting array.
- `Upsample[array, n, offset, val]` inserts n-1 elements of value val between array elements.
- `Upsample[image, ...]` upsamples an image.

## Examples

Upsample by factor of 3:

```wolfram
Upsample[{1, 2, 3}, 3]
(* {1, 0, 0, 2, 0, 0, 3, 0, 0} *)
```

With offset:

```wolfram
Upsample[{1, 2}, 3, 2]
(* {0, 1, 0, 0, 2, 0} *)
```

With custom fill value:

```wolfram
Upsample[{1, 2, 3}, 2, 1, -1]
(* {1, -1, 2, -1, 3, -1} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Upsample.html) for more details.*