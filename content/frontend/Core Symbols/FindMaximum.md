# FindMaximum

`FindMaximum[f, {x, x0}]` searches for a local maximum in f, starting from the point x=x0.

## Examples

Find local maximum:

```wolfram
FindMaximum[-x^2 + 4x + 5, {x, 0}]
(* {9., {x -> 2.}} *)
```

With constraints:

```wolfram
FindMaximum[{x + y, x^2 + y^2 <= 1}, {{x, 0.5}, {y, 0.5}}]
(* {1.414, {x -> 0.707, y -> 0.707}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMaximum.html) for more details.*