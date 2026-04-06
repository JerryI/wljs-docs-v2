---
title: RegionWithin
---

`RegionWithin[reg1, reg2]` returns True if reg2 is contained within reg1.

## Examples

Check if a smaller disk is within a larger disk:

```wolfram
RegionWithin[Disk[{0, 0}, 2], Disk[{0, 0}, 1]]
(* True *)
```

Check if regions do not contain each other:

```wolfram
RegionWithin[Disk[{0, 0}, 1], Disk[{2, 0}, 1]]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionWithin.html) for more details.