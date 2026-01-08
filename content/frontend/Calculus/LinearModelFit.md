---
title: LinearModelFit
---

`LinearModelFit[data, {f1, f2, ...}, x]` creates a linear regression model with statistical analysis.

## Examples

Perform linear regression:

```wolfram
data = {{1, 2.1}, {2, 3.9}, {3, 6.2}, {4, 7.8}}

lm = LinearModelFit[data, {1, x}, x]

(* Get the fitted function *)
lm["BestFit"]
(* 0.1 + 1.98 x *)

(* R-squared *)
lm["RSquared"]
(* 0.9973 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearModelFit.html) for more details.