---
title: InitialSeeding
---

`InitialSeeding` is an option for `NDSolve` and other functions that specifies equations that specify initial seeding values for variables that may be used by iterative algorithms.

This option provides starting guesses for iterative solvers.

## Examples

```wolfram
NDSolve[{y'[x] == y[x]^2, y[0] == 1}, y, {x, 0, 1}, 
  InitialSeeding -> {y[x] == 1}]
```

```wolfram
NDSolve[eqns, y, {x, 0, 10}, InitialSeeding -> {y[x] == x}]
```

```wolfram
FindRoot[x^2 - 2 == 0, {x, 0}, InitialSeeding -> {x == 1.5}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InitialSeeding.html) for more details.*