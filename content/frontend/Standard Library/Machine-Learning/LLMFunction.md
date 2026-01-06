# LLMFunction

`LLMFunction[prompt]` represents a template for a large language model (LLM) prompt.

- `LLMFunction[{prompt1, prompt2, ...}]` represents a combination of multiple prompts.
- `LLMFunction[prompt, form]` includes the interpreter form to apply to the response.
- `LLMFunction[...][params]` gives the LLM service response for prompt applied to parameters params.

## Examples

Create an LLM function:

```wolfram
f = LLMFunction["Translate '`1`' to French"];
f["Hello world"]
```

With interpreter:

```wolfram
f = LLMFunction["What is 2 + `1`?", "Number"];
f[3]
```

Multiple prompts:

```wolfram
LLMFunction[{"Be concise.", "Explain `topic` briefly"}]["topic" -> "gravity"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LLMFunction.html) for more details.*