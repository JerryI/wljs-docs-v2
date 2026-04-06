---
title: SkellamDistribution
---

`SkellamDistribution[μ1, μ2]` represents a Skellam distribution with shape parameters μ1 and μ2.

## Examples

Create a Skellam distribution:

```wolfram
dist = SkellamDistribution[5, 3]
```

Compute the mean:

```wolfram
Mean[SkellamDistribution[5, 3]]
(* 2 *)
```

Generate random samples:

```wolfram
RandomVariate[SkellamDistribution[5, 3], 10]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SkellamDistribution.html) for more details.