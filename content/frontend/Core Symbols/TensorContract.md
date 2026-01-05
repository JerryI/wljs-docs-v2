# TensorContract

`TensorContract[tensor,{{s11,s12},{s21,s22},…}]` yields the contraction of tensor in the pairs {si1,si2} of slots.

## Examples

Contract a matrix (compute trace):

```wolfram
TensorContract[{{a, b}, {c, d}}, {{1, 2}}]
(* a + d *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TensorContract.html) for more details.*