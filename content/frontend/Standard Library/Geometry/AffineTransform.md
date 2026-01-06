# AffineTransform

`AffineTransform[m]` gives a `TransformationFunction` that represents an affine transform that maps r to m.r.

`AffineTransform[{m, v}]` gives an affine transform that maps r to m.r + v.

## Examples

Create a scaling transformation:

```wolfram
AffineTransform[{{2, 0}, {0, 2}}]
```

Create a transformation with translation:

```wolfram
t = AffineTransform[{{{1, 0}, {0, 1}}, {1, 2}}];
t[{0, 0}]
(* {1, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AffineTransform.html) for more details.*