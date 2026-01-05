# ArrayDepth

`ArrayDepth[expr]` gives the depth to which expr is a full (rectangular) array, with all parts at each level having the same length.

## Examples

Depth of a matrix:

```wolfram
ArrayDepth[{{1, 2, 3}, {4, 5, 6}}]
(* 2 *)
```

Depth of a 3D array:

```wolfram
ArrayDepth[{{{1, 2}, {3, 4}}, {{5, 6}, {7, 8}}}]
(* 3 *)
```

Non-rectangular arrays:

```wolfram
ArrayDepth[{{1, 2}, {3}}]
(* 1 - not rectangular at depth 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayDepth.html) for more details.*