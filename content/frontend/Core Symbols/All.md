# All

`All` is a setting used for certain options. In `Part` and related functions, `All` specifies all parts at a particular level.

## Basic Usage

Extracting all elements at a specific level:

```wolfram
list = {{a, b}, {c, d}, {e, f}};
list[[All, 1]]
(* {a, c, e} *)
```

Using `All` to select entire rows or columns:

```wolfram
matrix = {{1, 2, 3}, {4, 5, 6}};
matrix[[All, 2]]
(* {2, 5} *)
```

`All` in options to apply settings to all elements:

```wolfram
Plot[{Sin[x], Cos[x]}, {x, 0, 2 Pi}, PlotStyle -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/All.html) for more details and examples on core symbols.*