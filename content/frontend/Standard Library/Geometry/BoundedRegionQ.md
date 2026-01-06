# BoundedRegionQ

`BoundedRegionQ[reg]` gives True if reg is a bounded region and False otherwise.

## Examples

Test if region is bounded:

```wolfram
BoundedRegionQ[Disk[]]
(* True *)
```

Unbounded region:

```wolfram
BoundedRegionQ[HalfPlane[{0, 0}, {1, 0}]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BoundedRegionQ.html) for more details.*