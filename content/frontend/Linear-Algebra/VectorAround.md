---
title: VectorAround
---

`VectorAround[{x1, x2, ...}, {δ1, δ2, ...}]` represents a vector of uncorrelated approximate numbers or quantities with values xi and uncertainties δi.

- `VectorAround[{x1, x2, ...}, {{Δ11, Δ12, ...}, {Δ12, Δ22, ...}, ...}]` represents a vector of approximate numbers or quantities with values xi and covariance matrix Δ.
- `VectorAround[{x1, x2}, {{δ1, δ2}, ρ}]` represents a pair of approximate numbers or quantities with uncertainties δ1, δ2 and correlation factor ρ.
- `VectorAround[{x1, x2, ...}, {{δ1, δ2, ...}, {{1, R12, ...}, {R12, 1, ...}, ...}}]` represents a vector of approximate numbers or quantities with uncertainties δi and correlation matrix R.

## Examples

```wolfram
VectorAround[{1, 2, 3}, {0.1, 0.2, 0.3}]
```

```wolfram
VectorAround[{5, 10}, {{0.5, 1}, 0.8}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorAround.html) for more details.*