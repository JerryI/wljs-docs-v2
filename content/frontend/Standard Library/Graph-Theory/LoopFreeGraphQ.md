# LoopFreeGraphQ

`LoopFreeGraphQ[g]` yields True if the graph g has no self-loops, and False otherwise.

## Examples

Check if a graph has no self-loops:
```wolfram
LoopFreeGraphQ[Graph[{1 -> 2, 2 -> 3}]]
```

A graph with a self-loop:
```wolfram
LoopFreeGraphQ[Graph[{1 -> 1, 1 -> 2}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LoopFreeGraphQ.html) for more details.*