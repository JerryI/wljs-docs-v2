# TensorProduct

`TensorProduct[tensor1, tensor2, ...]` represents the tensor product of the tensori.

## Examples

Tensor product of two vectors:

```wolfram
TensorProduct[{a, b}, {x, y}]
(* {{a x, a y}, {b x, b y}} *)
```

Tensor product of vectors and matrices:

```wolfram
TensorProduct[{1, 2}, {{1, 0}, {0, 1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TensorProduct.html) for more details.*