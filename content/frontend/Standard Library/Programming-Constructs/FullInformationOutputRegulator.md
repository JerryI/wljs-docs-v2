---
title: FullInformationOutputRegulator
---

`FullInformationOutputRegulator[sys, rspec]` gives the full state information output regulator for sys using specification rspec.

- `FullInformationOutputRegulator[{sys, {out1, ...}, {in1, ...}}, ...]` specifies the regulated outputs outi and the controlled inputs inj.

## Examples

Design a full information output regulator:

```wolfram
sys = StateSpaceModel[{{0, 1}, {-2, -3}}, {{0}, {1}}, {{1, 0}}, {{0}}];
FullInformationOutputRegulator[sys, {{-1}, {1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FullInformationOutputRegulator.html) for more details.*