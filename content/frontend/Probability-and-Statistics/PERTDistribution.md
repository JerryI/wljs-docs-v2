---
title: PERTDistribution
---

`PERTDistribution[{min, max}, c]` represents a PERT distribution with range *min* to *max* and mode at *c*.

- `PERTDistribution[{min, max}, c, λ]` represents a modified PERT distribution with shape parameter *λ*.

## Examples

```wolfram
PDF[PERTDistribution[{0, 10}, 5], x]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PERTDistribution.html) for more details.