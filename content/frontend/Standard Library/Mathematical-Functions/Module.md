# Module

`Module[{x, y, ...}, expr]` specifies that occurrences of the symbols x, y, ... in expr should be treated as local.

`Module[{x = x0, ...}, expr]` defines initial values for x, ....

## Example

Create a function with local variables:

```wolfram
counter[] := Module[{n = 0},
  n++;
  n
]
counter[] (* 1 *)
counter[] (* 1 - each call creates new local n *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Module.html) for more details.*