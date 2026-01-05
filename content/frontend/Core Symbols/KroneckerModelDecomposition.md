# KroneckerModelDecomposition

`KroneckerModelDecomposition[ssm]` yields the Kronecker decomposition of a descriptor state-space model ssm.

## Examples

Compute the Kronecker decomposition of a descriptor system:

```wolfram
ssm = StateSpaceModel[{{{1, 0}, {0, 0}}, {{1}, {1}}, {{1, 1}}, {{0}}}, 
  Descriptor -> {{1, 0}, {0, 0}}];
KroneckerModelDecomposition[ssm]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KroneckerModelDecomposition.html) for more details.*