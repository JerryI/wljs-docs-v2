---
title: CriticalSection
---

`CriticalSection[var, expr]` acquires the lock var for parallel computation, evaluates expr, then releases the lock var.

`CriticalSection[{var1, var2, ...}, expr]` locks all variables vari simultaneously.

## Examples

Use a critical section for thread-safe operations:

```wolfram
CriticalSection[lock, counter = counter + 1]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CriticalSection.html) for more details.