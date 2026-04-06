---
title: QnDispersion
---

`QnDispersion[list]` gives the Qn statistic of the elements in list.

`QnDispersion[list,c]` gives the Qn statistic with a scaling factor c.

## Examples

Compute the Qn dispersion of a list:

```wolfram
QnDispersion[{1, 2, 3, 4, 5, 100}]
(* 2.21914 *)
```

Compare with standard deviation (Qn is more robust to outliers):

```wolfram
StandardDeviation[{1, 2, 3, 4, 5, 100}]
(* 39.0128 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QnDispersion.html) for more details.