---
title: JohnsonDistribution
---

`JohnsonDistribution["SB", γ, δ, μ, σ]` represents a bounded Johnson distribution with shape parameters *γ*, *δ*, location parameter *μ*, and scale parameter *σ*.

- `JohnsonDistribution["SL", γ, δ, μ, σ]` represents a semi-bounded Johnson distribution.
- `JohnsonDistribution["SU", γ, δ, μ, σ]` represents an unbounded Johnson distribution.
- `JohnsonDistribution["SN", γ, δ, μ, σ]` represents a normal Johnson distribution.

## Examples

```wolfram
PDF[JohnsonDistribution["SU", 0, 1, 0, 1], x]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/JohnsonDistribution.html) for more details.