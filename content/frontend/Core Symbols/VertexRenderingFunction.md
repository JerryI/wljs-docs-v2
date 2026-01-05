# VertexRenderingFunction

`VertexRenderingFunction` is an option for `GraphPlot` and related functions that gives a function to generate the graphics primitives to use in rendering each vertex.

## Examples

Customize vertex appearance:

```wolfram
GraphPlot[{1 -> 2, 2 -> 3}, 
  VertexRenderingFunction -> ({Red, Disk[#1, 0.1], White, Text[#2, #1]} &)]
(* Graphics[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexRenderingFunction.html) for more details.*