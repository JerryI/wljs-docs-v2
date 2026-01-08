---
title: StringApply
---

`StringApply[f, string]` applies f to the code points in string.

- `StringApply[f]` represents an operator form of `StringApply` that can be applied to an expression.

## Examples

```wolfram
StringApply[Plus, "abc"]
```

```wolfram
StringApply[FromCharacterCode @* Plus] @ "hello"
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringApply.html) for more details.