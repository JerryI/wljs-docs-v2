---
title: KarhunenLoeveDecomposition
---

`KarhunenLoeveDecomposition[{a1, a2, …}]` gives the Karhunen–Loeve transform `{{b1, b2, …}, m}` of the numerical arrays `{a1, a2, …}`, where `m.ai ≈ bi`.

- `KarhunenLoeveDecomposition[{b1, b2, …}, m]` uses the inverse of the matrix `m` for transforming `bi` to `ai`.

## Examples

```wolfram
KarhunenLoeveDecomposition[RandomReal[1, {10, 5}]]
```

```wolfram
{transformed, matrix} = KarhunenLoeveDecomposition[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KarhunenLoeveDecomposition.html) for more details.*