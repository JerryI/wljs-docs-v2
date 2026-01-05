# DiffusionPDETerm

`DiffusionPDETerm[vars]` represents a diffusion term ∇{x1,…,xn}·(-∇{x1,…,xn}u) with model variables vars.

`DiffusionPDETerm[vars,c]` represents a diffusion term ∇{x1,…,xn}·(-c∇{x1,…,xn}u) with diffusion coefficient c.

`DiffusionPDETerm[vars,c,pars]` uses model parameters pars.

## Examples

Create a diffusion term for a 2D problem:

```wolfram
DiffusionPDETerm[{u[x, y], {x, y}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiffusionPDETerm.html) for more details.*