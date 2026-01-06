---
title: InputAssumptions
---

`InputAssumptions` is an option for `WolframAlpha` that specifies assumptions for current query input.

## Examples

```wolfram
WolframAlpha["solve x^2 = 4", InputAssumptions -> {"*C.x-_*Real-"}]
```

```wolfram
WolframAlpha["integrate sin x", InputAssumptions -> {}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InputAssumptions.html) for more details.*