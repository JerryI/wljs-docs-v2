# BinaryImageQ

`BinaryImageQ[image]` yields True if image has the form of a binary Image or Image3D object, and False otherwise.

## Examples

Test binary image:

```wolfram
img = Binarize[ExampleData[{"TestImage", "Lena"}]];
BinaryImageQ[img]
(* True *)
```

Test non-binary image:

```wolfram
BinaryImageQ[ExampleData[{"TestImage", "Lena"}]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinaryImageQ.html) for more details.*