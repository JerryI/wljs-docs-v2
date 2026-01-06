# RegionDilation

`RegionDilation[reg, r]` gives the dilation of the region reg by a disk of radius r centered at the origin.

- `RegionDilation[reg1, reg2]` gives the dilation of the region reg1 by the region reg2.
- `RegionDilation[reg1, reg2, {u, v}]` gives the dilation of reg1 scaled by a factor u and reg2 scaled by a factor v.

Region dilation is a morphological operation that expands a region by a specified amount.

## Examples

```wolfram
RegionDilation[Disk[], 0.5]
```

```wolfram
RegionDilation[Rectangle[], 0.2] // RegionPlot
```

```wolfram
RegionDilation[Point[{0, 0}], Disk[]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionDilation.html) for more details.*