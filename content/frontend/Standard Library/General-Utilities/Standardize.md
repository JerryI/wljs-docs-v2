---
title: Standardize
---

`Standardize[list]` shifts and rescales the elements of list to have zero mean and unit sample variance.

- `Standardize[list, f1]` shifts the elements in list by f1[list] and rescales them to have unit sample variance.
- `Standardize[list, f1, f2]` shifts by f1[list] and scales by f2[list].

## Examples

```wolfram
Standardize[{1, 2, 3, 4, 5}]
```

```wolfram
Standardize[{10, 20, 30}, Mean, StandardDeviation]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Standardize.html) for more details.*