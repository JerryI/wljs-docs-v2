---
title: LLMResourceFunction
---

`LLMResourceFunction["name"]` retrieves an LLMFunction with the specified name.

`LLMResourceFunction[loc]` imports an LLMFunction from the specified location.

`LLMResourceFunction[...][params]` applies the specified LLMFunction to the parameters params.

## Examples

Retrieve an LLM function by name:

```wolfram
LLMResourceFunction["Translator"]["Hello", "Spanish"]
(* "Hola" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LLMResourceFunction.html) for more details.*