---
title: AngleVector
---

`AngleVector[θ]` gives the list representing the 2D unit vector at angle θ relative to the x axis.

`AngleVector[{r, θ}]` gives the list representing the 2D vector of length r at angle θ.

`AngleVector[{x, y}, θ]` gives the result of starting from the point {x,y}, then going a unit distance at angle θ.

## Examples

Get a unit vector at 45 degrees:

```wolfram
AngleVector[Pi/4]
(* {1/Sqrt[2], 1/Sqrt[2]} *)
```

Create a vector of specific length:

```wolfram
AngleVector[{3, Pi/6}]
(* {3 Sqrt[3]/2, 3/2} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AngleVector.html) for more details.