# LLMPrompt

`LLMPrompt["name"]` gives the TemplateObject for the specified large language model prompt.

- `LLMPrompt[resource]` retrieves the TemplateObject for the specified resource.
- `LLMPrompt[..., params]` gives the TemplateObject with slots filled in by params.
- `LLMPrompt[...][p1, p2, ...]` applies a template with numbered slots to parameter values pi.
- `LLMPrompt[...][<|key1 -> p1, key2 -> p2|>]` applies a template with named slots to parameter data.

## Examples

```wolfram
LLMPrompt["CodeWriter"]
```

```wolfram
LLMPrompt["Translator"]["English", "French"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LLMPrompt.html) for more details.*