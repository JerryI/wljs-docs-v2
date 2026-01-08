---
title: FindProcessParameters
---

`FindProcessParameters[data, proc]` finds the parameter estimates for the process proc from data.

- `FindProcessParameters[data, proc, {{p, p0}, {q, q0}, ...}]` finds the parameters p, q, … with starting values p0, q0, … .

## Examples

Estimate parameters of an AR process from sample data:

```wolfram
data = RandomFunction[ARProcess[{0.5, -0.3}, 1], {1, 100}];
FindProcessParameters[data, ARProcess[{a, b}, σ]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindProcessParameters.html) for more details.