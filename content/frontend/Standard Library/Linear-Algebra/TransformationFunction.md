# TransformationFunction

`TransformationFunction[data]` represents a transformation function that applies geometric and other transformations.

## Examples

Create a rotation transformation:

```wolfram
tf = RotationTransform[Pi/4];
tf[{1, 0}]
(* {1/Sqrt[2], 1/Sqrt[2]} *)
```

Compose transformations:

```wolfram
tf = TranslationTransform[{1, 0}] @ RotationTransform[Pi/2];
tf[{0, 0}]
(* {1, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransformationFunction.html) for more details.*