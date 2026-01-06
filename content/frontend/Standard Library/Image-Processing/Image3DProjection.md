# Image3DProjection

`Image3DProjection[image]` takes a 3D image and returns a 2D image of maximum projection onto the x-y plane.

- `Image3DProjection[image, dir]` performs a projection in the direction specified by dir.
- `Image3DProjection[image, dir, mode]` specifies the projection mode.

## Examples

Maximum intensity projection:

```wolfram
img3d = ExampleData[{"TestImage3D", "CTengine"}];
Image3DProjection[img3d]
```

Projection in z direction:

```wolfram
Image3DProjection[img3d, "Z"]
```

Mean projection:

```wolfram
Image3DProjection[img3d, "Z", "Mean"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Image3DProjection.html) for more details.*