---
title: WithLock
---

`WithLock[File["path"], expr]` locks the file path, evaluates expr, then releases the file.

- `WithLock[LocalSymbol["name"], expr]` locks the local symbol name, evaluates expr, then releases the local symbol.
- `WithLock[var, expr]` locks the shared variable var, evaluates expr, then releases the shared variable.

## Examples

```wolfram
WithLock[File["myfile.txt"], Export["myfile.txt", data]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WithLock.html) for more details.*