---
title: FindDistribution
---

`FindDistribution[data]` finds a simple functional form to fit the distribution of data.

- `FindDistribution[data,n]` finds up to n best distributions.
- `FindDistribution[data,n,prop]` returns up to n best distributions associated with property prop.
- `FindDistribution[data,n,{prop1,prop2,…}]` returns up to n best distributions associated with properties prop1, prop2, etc.

## Examples

```wolfram
(* Find best fitting distribution *)
data = RandomVariate[NormalDistribution[0, 1], 1000];
FindDistribution[data]

(* Find top 3 distributions *)
FindDistribution[data, 3]

(* Get specific properties *)
FindDistribution[data, 1, "AIC"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindDistribution.html) for more details.