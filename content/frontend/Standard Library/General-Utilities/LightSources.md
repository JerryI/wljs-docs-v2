# LightSources

`LightSources` is an option for Graphics3D and related functions that specifies the properties of point light sources for simulated illumination.

## Examples

Use a single red light from above:

```wolfram
Graphics3D[Sphere[], Lighting -> {{"Point", Red, {0, 0, 2}}}]
```

Multiple colored lights:

```wolfram
Graphics3D[Sphere[], Lighting -> {{"Point", Red, {2, 0, 0}}, {"Point", Blue, {-2, 0, 0}}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LightSources.html) for more details.*