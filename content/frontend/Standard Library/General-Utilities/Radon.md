# Radon

`Radon[image]` gives an image representing the discrete Radon transform of image.

`Radon[image,{w,h}]` specifies the width w and the height h of the resulting image.

`Radon[image,{w,h},{θ1,θ2}]` computes the Radon transform only for angles from θ1 to θ2.

## Examples

Compute the Radon transform of an image:

```wolfram
Radon[ExampleData[{"TestImage", "Lena"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Radon.html) for more details.*