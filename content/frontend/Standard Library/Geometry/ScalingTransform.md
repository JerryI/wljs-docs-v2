# ScalingTransform

`ScalingTransform[{sx,sy,…}]` gives a TransformationFunction that represents scaling by a factor si along each coordinate axis from the origin.

`ScalingTransform[{sx,sy,…},p]` gives scaling centered at the point p.

`ScalingTransform[s,v]` gives scaling by a factor s along the direction of the vector v.

`ScalingTransform[s,v,p]` gives scaling along the direction of v, centered at the point p.

## Examples

Scale by a factor of 2 in all directions:

```wolfram
ScalingTransform[{2, 2}]
```

Apply a scaling transformation to a point:

```wolfram
ScalingTransform[{2, 3}][{1, 1}]
(* {2, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ScalingTransform.html) for more details.*