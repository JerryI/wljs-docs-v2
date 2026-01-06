---
title: LLMSynthesize
---

`LLMSynthesize[prompt]` generates text according to the input prompt.

- `LLMSynthesize[{prompt1, ...}]` combines multiple prompti together.
- `LLMSynthesize[..., prop]` returns the specified property of the generated text.

## Examples

```wolfram
LLMSynthesize["Write a haiku about mathematics"]
```

```wolfram
LLMSynthesize[{"Explain", "quantum computing"}, "FullResponse"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LLMSynthesize.html) for more details.*