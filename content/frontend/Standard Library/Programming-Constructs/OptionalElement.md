---
title: OptionalElement
---

`OptionalElement[patt]` is a grammar rules pattern object that represents 0 or 1 instances of patt.

- `OptionalElement[patt, default]` uses default if the element is not present.

## Examples

```wolfram
GrammarRules[{"hello" ~~ OptionalElement[" world"]}]
```

```wolfram
OptionalElement["optional", "default"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OptionalElement.html) for more details.*