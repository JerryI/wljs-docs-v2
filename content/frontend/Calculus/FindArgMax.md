---
title: FindArgMax
---

`FindArgMax[f,x]` gives the position xmax of a local maximum of f.

- `FindArgMax[f,{x,x0}]` gives the position xmax of a local maximum of f, found by a search starting from the point x=x0. 
- `FindArgMax[f,{{x,x0},{y,y0},…}]` gives the position {xmax,ymax,…} of a local maximum of a function of several variables. 
- `FindArgMax[{f,cons},{{x,x0},{y,y0},…}]` gives the position of a local maximum subject to the constraints cons.
- `FindArgMax[{f,cons},{x,y,…}]` starts from a point within the region defined by the constraints.

## Examples

```wolfram
(* Find the position of maximum *)
FindArgMax[Sin[x] Exp[-x^2], x]

(* Start from a specific point *)
FindArgMax[x^4 - 3x^2 + x, {x, 1}]

(* Multivariate function *)
FindArgMax[-(x^2 + y^2), {{x, 1}, {y, 1}}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindArgMax.html) for more details.