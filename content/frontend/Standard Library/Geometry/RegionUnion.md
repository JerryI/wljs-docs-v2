# RegionUnion

`RegionUnion[reg1, reg2, ...]` gives the union of the regions.

## Examples

Union of disks:

```wolfram
RegionUnion[Disk[{0, 0}, 1], Disk[{1, 0}, 1]]
```

Union of rectangles:

```wolfram
RegionUnion[Rectangle[{0, 0}, {1, 1}], Rectangle[{0.5, 0.5}, {1.5, 1.5}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionUnion.html) for more details.*