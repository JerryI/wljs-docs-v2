---
title: Random
---

`Random[]` gives a uniformly distributed pseudorandom Real in the range 0 to 1.

- `Random[type, range]` gives a pseudorandom number of the specified type, lying in the specified range. Possible types are: `Integer`, `Real` and `Complex`. The default range is 0 to 1. You can give the range `{min, max}` explicitly; a range specification of max is equivalent to `{0, max}`.

**Note:** `Random` is deprecated; use `RandomReal`, `RandomInteger`, or `RandomComplex` instead.

## Examples

```wolfram
Random[]
```

```wolfram
Random[Integer, 100]
```

```wolfram
Random[Real, {-1, 1}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Random.html) for more details.*