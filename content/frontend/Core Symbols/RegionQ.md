# RegionQ

`RegionQ[reg]` gives True if reg is a valid region and False otherwise.

## Examples

Check a disk:

```wolfram
RegionQ[Disk[]]
(* True *)
```

Invalid region:

```wolfram
RegionQ[123]
(* False *)
```

Polygon:

```wolfram
RegionQ[Polygon[{{0, 0}, {1, 0}, {0, 1}}]]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionQ.html) for more details.*