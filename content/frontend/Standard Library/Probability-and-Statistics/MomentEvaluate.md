# MomentEvaluate

`MomentEvaluate[mexpr, dist]` evaluates formal moments in the moment expression mexpr on the distribution dist.

- `MomentEvaluate[mexpr, list]` evaluates formal moments and formal sample moments in mexpr on the data list.
- `MomentEvaluate[mexpr, dist, list]` evaluates formal moments on the distribution dist and formal sample moments on the data list.

## Examples

Evaluate moment expression:

```wolfram
MomentEvaluate[Moment[1], NormalDistribution[]]
(* 0 *)
```

On data:

```wolfram
MomentEvaluate[SampleMoment[2], {1, 2, 3, 4, 5}]
```

Mixed evaluation:

```wolfram
MomentEvaluate[Moment[2] - SampleMoment[2], NormalDistribution[], data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MomentEvaluate.html) for more details.*