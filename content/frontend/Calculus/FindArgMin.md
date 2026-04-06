---
title: FindArgMin
---

`FindArgMin[f,x]` gives the position xmin of a local minimum of f.

- `FindArgMin[f,{x,x0}]` gives the position xmin of a local minimum of f, found by a search starting from the point x=x0. 
- `FindArgMin[f,{{x,x0},{y,y0},…}]` gives the position {xmin,ymin,…} of a local minimum of a function of several variables. 
- `FindArgMin[{f,cons},{{x,x0},{y,y0},…}]` gives the position of a local minimum subject to the constraints cons.
- `FindArgMin[{f,cons},{x,y,…}]` starts from a point within the region defined by the constraints.

## Examples

```wolfram
(* Find the position of minimum *)
FindArgMin[x^2 + 2x + 1, x]

(* Start from a specific point *)
FindArgMin[x^4 - 3x^2 + x, {x, 0}]

(* Multivariate function *)
FindArgMin[(x - 1)^2 + (y - 2)^2, {{x, 0}, {y, 0}}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindArgMin.html) for more details.