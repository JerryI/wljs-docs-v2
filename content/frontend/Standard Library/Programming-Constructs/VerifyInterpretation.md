---
title: VerifyInterpretation
---

`VerifyInterpretation` is an option for `TextCases`, `TextPosition` and `TextContents` that verifies that results can be interpreted using `Interpreter` and related functions and drops those that cannot.

## Examples

Verify date interpretations:

```wolfram
TextCases["Meeting on Jan 5th", "Date", VerifyInterpretation -> True]
```

Without verification:

```wolfram
TextCases["Meeting on Jan 5th", "Date", VerifyInterpretation -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VerifyInterpretation.html) for more details.*