---
title: Moment
---

`Moment[data, r]` gives the order r moment μ_r of data.

`Moment[dist, r]` gives the moment of the distribution dist.

## Examples

Compute moment of data:

```wolfram
Moment[{1, 2, 3, 4, 5}, 2]
(* 11 *)
```

Moment of a distribution:

```wolfram
Moment[NormalDistribution[0, 1], 2]
(* 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Moment.html) for more details.