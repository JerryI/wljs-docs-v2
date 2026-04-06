---
title: FlattenLayer
---

`FlattenLayer[]` represents a net layer that flattens any input array into a vector.

- `FlattenLayer[n]` represents a net layer that flattens its input to level n.
- `FlattenLayer[{{s11, s12, ...}, {s21, s22, ...}, ...}]` represents a net layer that flattens its input by combining all levels sij to make each level i in the result.

## Examples

Create a flatten layer:

```wolfram
FlattenLayer[]
```

Apply a flatten layer to an array:

```wolfram
layer = FlattenLayer[];
layer[{{1, 2}, {3, 4}}, NetEvaluationMode -> "Train"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FlattenLayer.html) for more details.