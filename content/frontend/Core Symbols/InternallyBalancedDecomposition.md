# InternallyBalancedDecomposition

`InternallyBalancedDecomposition[ssm]` yields the internally balanced decomposition of the state-space model ssm.

## Examples

Balanced decomposition:

```wolfram
sys = StateSpaceModel[{{-1, 0}, {1, -2}}, {{1}, {0}}, {{0, 1}}, {{0}}];
InternallyBalancedDecomposition[sys]
```

Get transformation matrix:

```wolfram
{bsys, t} = InternallyBalancedDecomposition[sys];
MatrixForm[t]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InternallyBalancedDecomposition.html) for more details.*