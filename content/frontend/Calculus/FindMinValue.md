---
title: FindMinValue
---

`FindMinValue[f,x]` gives the value at a local minimum of f.

- `FindMinValue[f,{x,x0}]` gives the value at a local minimum of f, found by a search starting from the point x=x0. 
- `FindMinValue[f,{{x,x0},{y,y0},…}]` gives the value at a local minimum of a function of several variables. 
- `FindMinValue[{f,cons},{{x,x0},{y,y0},…}]` gives the value at a local minimum subject to the constraints cons.
- `FindMinValue[{f,cons},{x,y,…}]` starts from a point within the region defined by the constraints.

## Examples

```wolfram
(* Find the minimum value *)
FindMinValue[x^2 + 2x + 1, x]

(* Start from a specific point *)
FindMinValue[x^4 - 3x^2 + x, {x, 0}]

(* Multivariate minimum *)
FindMinValue[(x - 1)^2 + (y - 2)^2, {{x, 0}, {y, 0}}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMinValue.html) for more details.