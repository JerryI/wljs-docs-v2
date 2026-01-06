---
title: AcceptanceThreshold
---

`AcceptanceThreshold` is an option that specifies the minimum threshold at which a result is considered acceptable.

## Examples

Use with Classify to set acceptance threshold:

```wolfram
classifier = Classify[{"spam" -> {"buy now", "free money"}, "ham" -> {"hello", "meeting"}}];
Classify[classifier, "buy this", AcceptanceThreshold -> 0.8]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AcceptanceThreshold.html) for more details.*