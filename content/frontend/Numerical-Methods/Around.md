---
title: Around
---

`Around[x, δ]` represents an approximate number or quantity with a value around x and an uncertainty δ.

`Around[x, {δ-, δ+}]` represents a number or quantity with a value around x and asymmetric uncertainties δ-, δ+.

`Around[list]` gives an approximate object around the mean of the elements of list with an uncertainty corresponding to their standard deviation.

## Examples

Create a number with uncertainty:

```wolfram
Around[10, 2]
(* 10 ± 2 *)
```

Arithmetic with uncertainties:

```wolfram
Around[10, 1] + Around[5, 0.5]
(* Around[15, 1.12] *)
```

If you plot it using `ListLinePlot`, error bars will be added automatically:

```wolfram
ListLinePlot[Table[{i, Around[RandomReal[{-10,10}, 5]+i]}, {i,30}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Around.html) for more details.