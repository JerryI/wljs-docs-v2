---
title: NumberFormat
---

`NumberFormat` is an option for `NumberForm` and related functions that specifies how the mantissa, base, and exponent should be assembled into a final print form.

## Examples

Customize number formatting:

```wolfram
NumberForm[12345.67, NumberFormat -> (Row[{#1, "×", #2, "^", #3}] &)]
```

Format scientific notation:

```wolfram
ScientificForm[1234.5, NumberFormat -> (Row[{#1, " × 10^", #3}] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NumberFormat.html) for more details.*