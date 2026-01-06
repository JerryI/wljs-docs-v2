# TensorTranspose

`TensorTranspose[tensor, perm]` represents the tensor obtained by transposing the slots of tensor as given by the permutation perm.

## Examples

Transpose a 3-dimensional tensor:

```wolfram
t = Array[Subscript[a, ##] &, {2, 3, 4}];
TensorTranspose[t, {3, 1, 2}] // Dimensions
(* {4, 2, 3} *)
```

Simple matrix transpose:

```wolfram
TensorTranspose[{{1, 2}, {3, 4}}, {2, 1}]
(* {{1, 3}, {2, 4}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TensorTranspose.html) for more details.*