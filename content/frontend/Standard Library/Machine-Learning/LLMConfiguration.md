---
title: LLMConfiguration
---

`LLMConfiguration[...]` represents a configuration for an LLM.

- `LLMConfiguration[prop -> val]` creates a configuration based on `$LLMEvaluator` with the specified property set to val.
- `LLMConfiguration[<|prop1 -> val1, prop2 -> val2, ...|>]` specifies several properties and values.
- `LLMConfiguration[LLMConfiguration[...], propspec]` creates a configuration based on an existing configuration.

## Examples

```wolfram
LLMConfiguration["Model" -> "gpt-4"]
```

```wolfram
LLMConfiguration[<|"Model" -> "gpt-3.5-turbo", "Temperature" -> 0.7|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LLMConfiguration.html) for more details.*