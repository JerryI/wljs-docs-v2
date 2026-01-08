---
title: CellularAutomaton
---

`CellularAutomaton[rule,init,t]` generates a list representing the evolution of the cellular automaton with the specified rule from initial condition init for t steps.

`CellularAutomaton[rule,init]` gives the result of evolving init for one step.

`CellularAutomaton[rule,init,{tspec,xspec,…}]` gives only those parts of the evolution specified by tspec, xspec, etc.

`CellularAutomaton[rule,init,{t,All,…}]` includes at each step all cells that could be affected over the course of t steps.

`CellularAutomaton[rule]` is an operator form of CellularAutomaton that represents one step of evolution.

## Examples

Evolve Rule 30 for 50 steps:

```wolfram
ArrayPlot[CellularAutomaton[30, {{1}, 0}, 50]]
```

One step of Rule 110:

```wolfram
CellularAutomaton[110, {0, 1, 1, 0, 1}]
(* {1, 1, 0, 1, 1} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CellularAutomaton.html) for more details.