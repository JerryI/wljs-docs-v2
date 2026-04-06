---
title: PaddedForm
---

`PaddedForm[expr, n]` prints with all numbers in expr padded to leave room for a total of n digits.

- `PaddedForm[expr, {n, f}]` prints with approximate real numbers having exactly f digits to the right of the decimal point.

## Examples

Pad to 6 digits:

```wolfram
PaddedForm[3.14, 6]
```

With decimal places:

```wolfram
PaddedForm[Pi, {10, 5}]
```

Format table:

```wolfram
Column[PaddedForm[#, {6, 2}] & /@ {1.5, 12.75, 123.456}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PaddedForm.html) for more details.