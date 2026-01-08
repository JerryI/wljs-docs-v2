---
title: SemanticInterpretation
---

`SemanticInterpretation["string"]` attempts to give the best semantic interpretation of the specified free-form string as a Wolfram Language expression.

- `SemanticInterpretation["string", pattern]` filters possible semantic interpretations, returning the best one that matches the specified pattern.
- `SemanticInterpretation["string", pattern, head]` returns the semantic interpretation wrapped with the specified head.

## Examples

```wolfram
SemanticInterpretation["population of France"]
```

```wolfram
SemanticInterpretation["5 feet 10 inches", _Quantity]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SemanticInterpretation.html) for more details.