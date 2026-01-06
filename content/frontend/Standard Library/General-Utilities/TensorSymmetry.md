# TensorSymmetry

`TensorSymmetry[tensor]` gives the symmetry of tensor under permutations of its slots.

`TensorSymmetry[tensor, slots]` gives the symmetry under permutation of the specified list of slots.

## Examples

Check symmetry of a symmetric matrix:

```wolfram
TensorSymmetry[{{1, 2}, {2, 3}}]
(* Symmetric[{1, 2}] *)
```

Antisymmetric tensor:

```wolfram
TensorSymmetry[{{0, 1}, {-1, 0}}]
(* Antisymmetric[{1, 2}] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TensorSymmetry.html) for more details.*