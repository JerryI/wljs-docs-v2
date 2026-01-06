# ShellRegion

`ShellRegion[reg]` gives a solid shell of a 3D region reg.

- `ShellRegion[reg, t]` gives a solid shell of reg with minimal thickness t.

This function creates a hollow shell from a solid region, useful for 3D printing and visualization.

## Examples

```wolfram
ShellRegion[Ball[]]
```

```wolfram
ShellRegion[Cuboid[], 0.1]
```

```wolfram
RegionPlot3D[ShellRegion[Sphere[], 0.2]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShellRegion.html) for more details.*