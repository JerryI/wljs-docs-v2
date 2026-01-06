# NArgMax

`NArgMax[f, x]` gives a position xmax at which f is numerically globally maximized.

`NArgMax[f, {x, y, ...}]` gives a position {xmax, ymax, ...} at which f is maximized.

`NArgMax[{f, cons}, {x, y, ...}]` gives a position maximizing f subject to constraints cons.

## Examples

Find maximum location:

```wolfram
NArgMax[-x^2 + 4 x, x]
(* 2. *)
```

With constraints:

```wolfram
NArgMax[{x + y, x^2 + y^2 <= 1}, {x, y}]
(* {0.707107, 0.707107} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NArgMax.html) for more details.*