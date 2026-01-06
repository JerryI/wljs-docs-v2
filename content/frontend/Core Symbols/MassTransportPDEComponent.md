# MassTransportPDEComponent

`MassTransportPDEComponent[vars, pars]` yields a mass transport PDE term with variables vars and parameters pars.

This is used for modeling mass transport in partial differential equations.

## Examples

```wolfram
MassTransportPDEComponent[{c[x, t], {x}}, {D, v}]
```

```wolfram
MassTransportPDEComponent[{u[x, y, t], {x, y}}, params]
```

```wolfram
pde = MassTransportPDEComponent[vars, {diffusion, velocity}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MassTransportPDEComponent.html) for more details.*