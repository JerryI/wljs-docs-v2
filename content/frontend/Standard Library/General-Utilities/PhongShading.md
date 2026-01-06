# PhongShading

`PhongShading[]` is a three-dimensional graphics directive that specifies that faces of polygons and other filled graphics objects are to be drawn to reflect as a smooth surface using normal-vector interpolation shading.

`PhongShading[d]` uses the attenuation factor d for the diffuse light.

`PhongShading[d, s]` uses the attenuation factor s for the specular light.

`PhongShading[d, s, a]` uses the attenuation factor a for the ambient light.

## Examples

```wolfram
Graphics3D[{PhongShading[], Sphere[]}]
(* sphere with Phong shading *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PhongShading.html) for more details.*