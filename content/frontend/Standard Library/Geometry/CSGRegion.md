---
title: CSGRegion
---

`CSGRegion[{reg1,reg2,…}]` represents the solid region corresponding to the union of solid regions reg1,reg2,….

`CSGRegion["op",{reg1,reg2,…}]` represents the solid region corresponding to the Boolean combination "op" of regions reg1,reg2,….

`CSGRegion["op",{…,wi[regi],…}]` represents the solid region defined by regions regi transformed by a geometric transformation wi.

## Examples

```wolfram
CSGRegion["Difference", {Ball[], Cuboid[]}]
(* CSGRegion representing the difference of a ball and cuboid *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CSGRegion.html) for more details.*