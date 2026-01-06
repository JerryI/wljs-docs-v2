# LLMExampleFunction

`LLMExampleFunction[{in1 -> out1, in2 -> out2, ...}]` creates an LLMFunction from few-shot examples.

- `LLMExampleFunction[{in1, in2, ...} -> {out1, out2, ...}]` generates the same result.
- `LLMExampleFunction[{header, training}]` prefaces the prompt with header.
- `LLMExampleFunction[prompting, form]` includes the interpreter form to apply to the response.

## Examples

Create a function from examples:
```wolfram
f = LLMExampleFunction[{"happy" -> "sad", "hot" -> "cold", "up" -> "down"}];
f["light"]
```

Use with a header:
```wolfram
LLMExampleFunction[{"Give the opposite:", {"happy" -> "sad", "hot" -> "cold"}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LLMExampleFunction.html) for more details.*