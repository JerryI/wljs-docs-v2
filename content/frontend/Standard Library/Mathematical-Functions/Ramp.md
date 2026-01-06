---
title: Ramp
---

`Ramp[x]` gives x if x ≥ 0 and 0 otherwise.

## Examples

Ramp function:

```wolfram
Ramp[5]
(* 5 *)
```

Negative becomes zero:

```wolfram
Ramp[-3]
(* 0 *)
```

Plot ramp:

```wolfram
Plot[Ramp[x], {x, -2, 2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Ramp.html) for more details.*