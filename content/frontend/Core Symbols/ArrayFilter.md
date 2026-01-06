# ArrayFilter

`ArrayFilter[f, array, r]` applies f to all range-r blocks in the specified array.

`ArrayFilter[f, array, {r1, r2, ...}]` applies f to blocks with ranges r1, r2, ... in successive dimensions.

## Examples

Apply a mean filter to an array:

```wolfram
ArrayFilter[Mean, {1, 2, 3, 4, 5}, 1]
(* {3/2, 2, 3, 4, 9/2} *)
```

2D filtering:

```wolfram
ArrayFilter[Max, {{1, 2}, {3, 4}}, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayFilter.html) for more details.*