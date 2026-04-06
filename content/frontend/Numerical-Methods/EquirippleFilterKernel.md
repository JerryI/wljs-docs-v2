---
title: EquirippleFilterKernel
---

`EquirippleFilterKernel[{{{ωL1, ωR1}, {ωL2, ωR2}, ...}, {a1, a2, ...}}, n]` creates a finite impulse response (FIR) filter kernel of length n with an equiripple amplitude response.

`EquirippleFilterKernel[{{{ωL1, ωR1}, ...}, {a1, ...}, {w1, ...}}, n]` uses relative weights wi for each frequency band.

`EquirippleFilterKernel[{"type", {{{ωL1, ωR1}, ...}, ...}}, n]` creates a filter of the specified "type".

## Examples

Create an equiripple lowpass filter:

```wolfram
EquirippleFilterKernel[{{{0, 0.3}, {0.4, 1}}, {1, 0}}, 31]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EquirippleFilterKernel.html) for more details.