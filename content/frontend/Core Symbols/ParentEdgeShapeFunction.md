# ParentEdgeShapeFunction

`ParentEdgeShapeFunction` is an option for `Tree` and related functions that specifies a function to use to generate primitives for rendering edges.

## Examples

Use a custom edge style:

```wolfram
Tree[{1, {2, 3}}, ParentEdgeShapeFunction -> "Line"]
(* Tree[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParentEdgeShapeFunction.html) for more details.*