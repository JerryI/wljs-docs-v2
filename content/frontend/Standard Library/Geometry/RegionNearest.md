# RegionNearest

`RegionNearest[reg, p]` gives a point in the region that is nearest to point p.

## Examples

Nearest point on circle:

```wolfram
RegionNearest[Circle[{0, 0}, 1], {2, 0}]
(* {1, 0} *)
```

Nearest function:

```wolfram
nf = RegionNearest[Disk[]];
nf[{5, 5}]
(* {1/Sqrt[2], 1/Sqrt[2]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionNearest.html) for more details.*