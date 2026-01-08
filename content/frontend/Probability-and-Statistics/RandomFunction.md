---
title: RandomFunction
---

`RandomFunction[proc,{tmin,tmax}]` generates a pseudorandom function from the process proc from tmin to tmax.

`RandomFunction[proc,{tmin,tmax,dt}]` generates a pseudorandom function from tmin to tmax in steps of dt.

`RandomFunction[proc,…,n]` generates an ensemble of n pseudorandom functions.

## Examples

Generate a Wiener process:

```wolfram
RandomFunction[WienerProcess[], {0, 10}]
```

Generate multiple paths:

```wolfram
RandomFunction[WienerProcess[], {0, 1, 0.01}, 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomFunction.html) for more details.