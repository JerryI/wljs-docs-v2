# EdgeRenderingFunction

`EdgeRenderingFunction` is an option for `GraphPlot` and related functions that gives a function to generate the graphics primitives to use in rendering each edge.

## Examples

Custom edge rendering:

```wolfram
GraphPlot[{1 -> 2, 2 -> 3}, EdgeRenderingFunction -> ({Red, Arrow[#1]} &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeRenderingFunction.html) for more details.*