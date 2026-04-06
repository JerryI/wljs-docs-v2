---
title: TuringMachine
---

`TuringMachine[rule, init, t]` generates a list representing the evolution of the Turing machine with the specified rule from initial condition init for t steps.

- `TuringMachine[rule, init]` gives the result of evolving init for one step.
- `TuringMachine[rule]` is an operator form of `TuringMachine` that corresponds to one step of evolution.

## Examples

```wolfram
ArrayPlot[TuringMachine[2506, {{1}, 0}, 50]]
```

```wolfram
TuringMachine[2506, {{1, 0, 1}, 1}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TuringMachine.html) for more details.