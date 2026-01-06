# LocatorRegion

`LocatorRegion` is an option for `Locator` that specifies where the locator object should by default be allowed to go when it is dragged.

## Examples

Constrain locator to a disk:
```wolfram
Manipulate[Graphics[Point[pt]], {{pt, {0, 0}}, Locator, LocatorRegion -> Disk[]}]
```

Constrain to a rectangle:
```wolfram
Locator[Dynamic[pt], LocatorRegion -> Rectangle[{-1, -1}, {1, 1}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocatorRegion.html) for more details.*