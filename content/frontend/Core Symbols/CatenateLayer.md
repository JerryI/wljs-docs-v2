# CatenateLayer

`CatenateLayer[]` represents a net layer that takes a list of input arrays and catenates them.

`CatenateLayer[n]` represents a net layer that takes a list of input arrays and catenates them at level n.

## Examples

Create a catenate layer and apply it to arrays:

```wolfram
layer = CatenateLayer[];
layer[{{1, 2}, {3, 4, 5}}]
(* {1, 2, 3, 4, 5} *)
```

Catenate at a specific level:

```wolfram
layer = CatenateLayer[1];
layer[{{{1, 2}}, {{3, 4}}}]
(* {{1, 2}, {3, 4}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CatenateLayer.html) for more details.*