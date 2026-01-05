# MatrixQ

`MatrixQ[expr]` gives `True` if expr is a rectangular list of lists representing a matrix.

`MatrixQ[expr, test]` gives `True` only if test yields `True` for each matrix element.

## Examples

Test for matrices:

```wolfram
MatrixQ[{{1, 2}, {3, 4}}]
(* True *)
```

Non-rectangular arrays are not matrices:

```wolfram
MatrixQ[{{1, 2}, {3}}]
(* False *)
```

Test for numeric matrices:

```wolfram
MatrixQ[{{1, 2}, {3, 4}}, IntegerQ]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatrixQ.html) for more details.*