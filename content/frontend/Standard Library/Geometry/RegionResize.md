---
title: RegionResize
---

`RegionResize[reg,l]` resize the region reg to have the first side length l preserving side length ratios.

`RegionResize[reg,{lmax}]` resize into a box with maximum side length lmax preserving side length ratios.

`RegionResize[reg,{l1,l2,…}]` resize into a box with side lengths li.

`RegionResize[reg,{{x1,min,x1,max},{x2,min,x2,max},…}]` resize into a box with corners {x1,min,x2,min,…} and {x1,max,x2,max,…}.

## Examples

```wolfram
RegionResize[Disk[], 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionResize.html) for more details.*