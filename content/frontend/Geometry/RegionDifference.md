---
title: RegionDifference
---

`RegionDifference[reg1, reg2]` gives the difference of regions (reg1 minus reg2).

## Examples

Disk with hole:

```wolfram
RegionDifference[Disk[{0, 0}, 2], Disk[{0, 0}, 1]]
```

Subtract region:

```wolfram
RegionDifference[Rectangle[], Disk[{0.5, 0.5}, 0.3]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionDifference.html) for more details.