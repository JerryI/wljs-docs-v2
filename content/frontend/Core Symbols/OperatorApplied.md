# OperatorApplied

`OperatorApplied[f, n]` represents an operator form of the function f of n arguments so that `OperatorApplied[f, n][x1]...[xn]` is equivalent to `f[x1, ..., xn]`.

- `OperatorApplied[f]` represents an operator form of the function f of two arguments so that `OperatorApplied[f][y][x]` is equivalent to `f[x, y]`.
- `OperatorApplied[f, {i1, ..., in}]` represents an operator form of the function f of n arguments so that `OperatorApplied[f, {i1, ..., in}][x1]...[xn]` is equivalent to `f[xi1, ..., xin]`.
- `OperatorApplied[f, k -> {i1, ..., in}]` represents an operator form that takes k arguments.

## Examples

Create a curried function:

```wolfram
op = OperatorApplied[f, 3];
op[a][b][c]
(* f[a, b, c] *)
```

Default two-argument form (swapped):

```wolfram
OperatorApplied[Divide][2][10]
(* 5 *)
```

Specify argument order:

```wolfram
OperatorApplied[f, {2, 1}][a][b]
(* f[b, a] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OperatorApplied.html) for more details.*