---
title: Perimeter
---

`Perimeter[reg]` gives the perimeter of the two-dimensional region reg.

`Perimeter[{x1,x2},{s,smin,smax},{t,tmin,tmax}]` gives the perimeter of the parametrized region whose Cartesian coordinates xi are functions of s and t.

`Perimeter[{x1,x2},{s,smin,smax},{t,tmin,tmax},chart]` interprets the xi as coordinates in the specified coordinate chart.

## Examples

Compute the perimeter of a disk:

```wolfram
Perimeter[Disk[]]
(* 2 Pi *)
```

Compute the perimeter of a rectangle:

```wolfram
Perimeter[Rectangle[{0, 0}, {3, 4}]]
(* 14 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Perimeter.html) for more details.