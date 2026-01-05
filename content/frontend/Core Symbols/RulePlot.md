# RulePlot

`RulePlot[sys]` generates a plot representing the rule for the computational system sys.

`RulePlot[sys,init,t]` generates a plot of the evolution of the system sys from initial condition init for t steps.

`RulePlot[sys,evol]` generates a plot of the evolution evol assuming it is derived from a system of the form sys.

## Examples

Plot a cellular automaton rule:

```wolfram
RulePlot[CellularAutomaton[30]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RulePlot.html) for more details.*