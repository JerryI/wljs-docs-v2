# RegionSymmetricDifference

`RegionSymmetricDifference[reg1, reg2, ...]` represents the symmetric difference of the regions reg1, reg2, ....

## Examples

Compute the symmetric difference of two disks:
```wolfram
RegionSymmetricDifference[Disk[{0, 0}], Disk[{1, 0}]]
```

Visualize the symmetric difference:
```wolfram
Region[RegionSymmetricDifference[Rectangle[], Disk[{0.5, 0.5}, 0.5]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionSymmetricDifference.html) for more details.*