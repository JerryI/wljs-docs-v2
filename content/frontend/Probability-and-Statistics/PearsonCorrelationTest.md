---
title: PearsonCorrelationTest
---

`PearsonCorrelationTest[v1,v2]` tests whether the vectors v1 and v2 are linearly independent.

`PearsonCorrelationTest[…,"property"]` returns the value of "property".

## Examples

Test correlation between two vectors:

```wolfram
v1 = {1, 2, 3, 4, 5};
v2 = {2, 4, 5, 4, 5};
PearsonCorrelationTest[v1, v2]
(* True *)
```

Get the p-value:

```wolfram
PearsonCorrelationTest[v1, v2, "PValue"]
(* 0.0417 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PearsonCorrelationTest.html) for more details.