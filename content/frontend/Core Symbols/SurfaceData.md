# SurfaceData

`SurfaceData[entity, property]` gives the value of the specified property for the surface entity.

- `SurfaceData[{entity1, entity2, ...}, property]` gives a list of property values for the specified surface entities.
- `SurfaceData[entity, property, annotation]` gives the specified annotation associated with the given property.

## Examples

Get information about a mathematical surface:

```wolfram
SurfaceData["MobiusStrip", "ParametricEquations"]
```

List available surfaces:

```wolfram
SurfaceData[]
```

Get the parametric representation:

```wolfram
SurfaceData["Torus", "ParametricEquations"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SurfaceData.html) for more details.*