# ConservativeConvectionPDETerm

`ConservativeConvectionPDETerm[vars, α]` represents a conservative convection term ∇{x1,…,xn}·(-α u) with conservative convection coefficient α and model variables vars.

`ConservativeConvectionPDETerm[vars, α, pars]` uses model parameters pars.

## Examples

```wolfram
ConservativeConvectionPDETerm[{u[x, y], {x, y}}, {{1, 0}, {0, 1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConservativeConvectionPDETerm.html) for more details.*