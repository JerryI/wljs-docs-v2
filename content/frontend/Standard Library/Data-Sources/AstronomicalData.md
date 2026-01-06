---
title: AstronomicalData
---

`AstronomicalData["name","property"]` gives the value of the specified property of the astronomical object with the specified name.

`AstronomicalData["name",{"property",date}]` gives the value of a property at a particular date and time.

## Examples

```wolfram
AstronomicalData["Sun", "Mass"]
(* 1.9885*10^30 kg *)
```

```wolfram
AstronomicalData["Moon", "Distance"]
(* Current distance to the Moon *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AstronomicalData.html) for more details.*