---
title: LLMPromptGenerator
---

`LLMPromptGenerator[f]` represents a prompt generator that uses the function *f*.

- `LLMPromptGenerator[f, inputspec]` provides the specified *inputspec* to *f*.

## Examples

```wolfram
LLMPromptGenerator[StringJoin["Summarize: ", #] &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LLMPromptGenerator.html) for more details.*