# AsymptoticOutputTracker

`AsymptoticOutputTracker[sys, {f1, ...}, {p1, ...}]` gives the state feedback control law that causes the outputs of the affine system sys to track the reference signals fi with decay rates pj.

`AsymptoticOutputTracker[{sys, {out1, ...}, {in1, ...}}, ...]` specifies outputs outi and control inputs inj to use.

## Examples

Create an output tracker for a control system:

```wolfram
sys = AffineStateSpaceModel[{{0, 1}, {-2, -3}}, {{0}, {1}}, {{1, 0}}];
AsymptoticOutputTracker[sys, {Sin[t]}, {-1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticOutputTracker.html) for more details.*