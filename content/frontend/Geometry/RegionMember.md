---
title: RegionMember
---

`RegionMember[reg, {x, y, ...}]` gives True if the point is inside the region.

## Examples

Test point in disk:

```wolfram
RegionMember[Disk[], {0.5, 0.5}]
(* True *)

RegionMember[Disk[], {2, 0}]
(* False *)
```

Membership function:

```wolfram
mf = RegionMember[Ball[]];
mf[{0.5, 0.5, 0.5}]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionMember.html) for more details.