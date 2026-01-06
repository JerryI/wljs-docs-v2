---
title: MemoryConstraint
---

`MemoryConstraint` is an option for TestReport and VerificationTest that specifies how much memory (in bytes) the test is allowed to use.

## Examples

Limit memory usage in a verification test:

```wolfram
VerificationTest[Range[100], MemoryConstraint -> 10^6]
(* TestResultObject[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MemoryConstraint.html) for more details.*