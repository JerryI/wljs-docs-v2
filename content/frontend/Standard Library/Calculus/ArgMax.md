# ArgMax

`ArgMax[f, x]` gives a position xmax at which f is maximized.

`ArgMax[f, {x, y, ...}]` gives a position {xmax, ymax, ...} at which f is maximized.

`ArgMax[{f, cons}, {x, y, ...}]` gives a position at which f is maximized subject to the constraints cons.

## Examples

Find where a function is maximized:

```wolfram
ArgMax[Sin[x], x]
(* Pi/2 *)
```

With constraints:

```wolfram
ArgMax[{x + y, x^2 + y^2 <= 1}, {x, y}]
(* {1/Sqrt[2], 1/Sqrt[2]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArgMax.html) for more details.*