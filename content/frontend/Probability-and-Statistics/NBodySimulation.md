---
title: NBodySimulation
---

`NBodySimulation[law, {state1, ..., staten}, t]` generates a simulation of the motion of a system of n bodies with initial states statei, governed by the specified potential or force law, over a length of time t.

`NBodySimulation[law, <|body1 -> state1, ..., bodyn -> staten|>, t]` generates a simulation of the motion of a system of n bodies with names bodyi.

## Examples

Simulate two bodies under gravitational attraction:

```wolfram
NBodySimulation[
  "InverseSquare",
  {<|"Mass" -> 1, "Position" -> {0, 0}, "Velocity" -> {0, 0.5}|>,
   <|"Mass" -> 1, "Position" -> {1, 0}, "Velocity" -> {0, -0.5}|>},
  10
]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NBodySimulation.html) for more details.