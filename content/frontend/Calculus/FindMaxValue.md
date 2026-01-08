---
title: FindMaxValue
---

`FindMaxValue[f,x]` gives the value at a local maximum of f.

- `FindMaxValue[f,{x,x0}]` gives the value at a local maximum of f, found by a search starting from the point x=x0. 
- `FindMaxValue[f,{{x,x0},{y,y0},…}]` gives the value at a local maximum of a function of several variables. 
- `FindMaxValue[{f,cons},{{x,x0},{y,y0},…}]` gives the value at a local maximum subject to the constraints cons.
- `FindMaxValue[{f,cons},{x,y,…}]` starts from a point within the region defined by the constraints.

## Examples

```wolfram
(* Find the maximum value *)
FindMaxValue[Sin[x] Exp[-x^2], x]

(* Start from a specific point *)
FindMaxValue[x^4 - 3x^2 + x, {x, 1}]

(* Multivariate maximum *)
FindMaxValue[-(x^2 + y^2), {{x, 1}, {y, 1}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMaxValue.html) for more details.