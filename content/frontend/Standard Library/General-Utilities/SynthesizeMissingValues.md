---
title: SynthesizeMissingValues
---

`SynthesizeMissingValues[{example1, example2, ...}]` replaces missing values in each example by generated values.

- `SynthesizeMissingValues[dist, data]` uses the distribution dist to generate values.

## Examples

Fill missing values:

```wolfram
SynthesizeMissingValues[{{1, 2, Missing[]}, {4, Missing[], 6}}]
```

With specific distribution:

```wolfram
SynthesizeMissingValues[NormalDistribution[], {1, Missing[], 3, Missing[]}]
```

Dataset with missing values:

```wolfram
SynthesizeMissingValues[Dataset[{<|"a" -> 1, "b" -> Missing[]|>}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SynthesizeMissingValues.html) for more details.*