# MatrixRank

`MatrixRank[m]` gives the rank of the matrix `m` (the number of linearly independent rows or columns).

## Examples

Compute matrix rank:

```wolfram
MatrixRank[{{1, 2}, {3, 4}}]
(* 2 *)

(* Singular matrix has lower rank *)
MatrixRank[{{1, 2, 3}, {2, 4, 6}, {1, 1, 1}}]
(* 2 *)

(* Identity matrix *)
MatrixRank[IdentityMatrix[5]]
(* 5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MatrixRank.html) for more details.*